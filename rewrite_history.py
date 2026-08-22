import subprocess
import time
import os
import datetime

# Start and end dates
start_date = datetime.datetime(2025, 12, 2, 12, 0, 0, tzinfo=datetime.timezone.utc)
end_date = datetime.datetime(2025, 12, 24, 12, 0, 0, tzinfo=datetime.timezone.utc)

# Get all commits in reverse order (oldest first)
output = subprocess.check_output(['git', 'rev-list', '--reverse', 'HEAD'])
commits = output.decode('utf-8').strip().split('\n')

if not commits or commits == ['']:
    print("No commits found.")
    exit(1)

num_commits = len(commits)
print(f"Found {num_commits} commits.")

if num_commits == 1:
    interval = 0
else:
    interval = (end_date - start_date).total_seconds() / (num_commits - 1)

old_to_new = {}

for i, old_sha in enumerate(commits):
    # Calculate new date
    current_date = start_date + datetime.timedelta(seconds=i * interval)
    timestamp = int(current_date.timestamp())
    tz_str = "+0000"
    
    # Get commit details
    cat_file_out = subprocess.check_output(['git', 'cat-file', '-p', old_sha])
    lines = cat_file_out.decode('utf-8').split('\n')
    
    tree = None
    parents = []
    author_info = None
    committer_info = None
    message_lines = []
    
    is_message = False
    for line in lines:
        if is_message:
            message_lines.append(line)
            continue
            
        if line == '':
            is_message = True
            continue
            
        parts = line.split(' ', 1)
        if len(parts) < 2:
            continue
            
        key, value = parts[0], parts[1]
        
        if key == 'tree':
            tree = value
        elif key == 'parent':
            parents.append(value)
        elif key == 'author':
            # Extract name and email, discard old timestamp
            # Format: Name <email> timestamp tz
            # Find the last '>' to split
            idx = value.rfind('>')
            if idx != -1:
                name_email = value[:idx+1]
                author_info = f"{name_email} {timestamp} {tz_str}"
        elif key == 'committer':
            idx = value.rfind('>')
            if idx != -1:
                name_email = value[:idx+1]
                committer_info = f"{name_email} {timestamp} {tz_str}"
                
    # Build new commit content
    new_commit_content = f"tree {tree}\n"
    for p in parents:
        new_parent = old_to_new.get(p, p)
        new_commit_content += f"parent {new_parent}\n"
        
    new_commit_content += f"author {author_info}\n"
    new_commit_content += f"committer {committer_info}\n"
    new_commit_content += "\n"
    new_commit_content += "\n".join(message_lines)
    
    # Make sure we end with exactly what was there, but join adds an extra string.
    # Actually, message_lines was split by \n, so join is correct.
    
    # Write new commit
    process = subprocess.Popen(
        ['git', 'hash-object', '-t', 'commit', '-w', '--stdin'],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    stdout, stderr = process.communicate(input=new_commit_content.encode('utf-8'))
    
    if process.returncode != 0:
        print(f"Error creating commit: {stderr.decode('utf-8')}")
        exit(1)
        
    new_sha = stdout.decode('utf-8').strip()
    old_to_new[old_sha] = new_sha
    print(f"Mapped {old_sha[:7]} -> {new_sha[:7]} (Date: {current_date.strftime('%Y-%m-%d %H:%M:%S')})")

new_head = old_to_new[commits[-1]]

# Get current branch
current_branch = subprocess.check_output(['git', 'rev-parse', '--abbrev-ref', 'HEAD']).decode('utf-8').strip()

print(f"Updating branch {current_branch} to new head {new_head}")
subprocess.check_call(['git', 'update-ref', f'refs/heads/{current_branch}', new_head])
print("Done!")
