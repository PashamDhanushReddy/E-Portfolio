const fs = require('fs');
const content = fs.readFileSync('public/favicon.svg', 'utf8');
const fills = content.match(/fill="#[A-Fa-f0-9]+"/g);
if (fills) {
  const uniqueFills = [...new Set(fills)];
  console.log(uniqueFills);
} else {
  console.log("No fills found");
}
