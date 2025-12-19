const fs = require('fs');
const html = fs.readFileSync('C:\\Users\\sanja\\.gemini\\antigravity-ide\\brain\\3e0361a2-2f39-4c0a-a106-4d5612de41fc\\.system_generated\\steps\\222\\content.md', 'utf8');

let regex = /"parts":\["((?:\\"|[^"])*?)"\]/g;
let match;
while ((match = regex.exec(html)) !== null) {
  let text = match[1].replace(/\\n/g, '\n').replace(/\\"/g, '"');
  console.log("---- MESSAGE ----");
  console.log(text.substring(0, 800));
}
