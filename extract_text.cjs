const fs = require('fs');
const html = fs.readFileSync('C:\\Users\\sanja\\.gemini\\antigravity-ide\\brain\\3e0361a2-2f39-4c0a-a106-4d5612de41fc\\.system_generated\\steps\\222\\content.md', 'utf8');

const text = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                 .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                 .replace(/<[^>]+>/g, '\n')
                 .replace(/\n\s*\n/g, '\n');

fs.writeFileSync('c:\\Users\\sanja\\OneDrive\\Desktop\\eportfolio\\portfolio\\chatgpt_text.txt', text);
