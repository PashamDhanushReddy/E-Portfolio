const fs = require('fs');

const content = fs.readFileSync('public/favicon.svg', 'utf8');

// Function to determine if a color is light
function isLight(hex) {
    if (hex.length === 7) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        // Simple luminance threshold (0-255)
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
        return luminance > 230; // Very light colors
    }
    return false;
}

// Regex to match a full <path ... /> element
const newContent = content.replace(/<path[^>]*fill="#([A-Fa-f0-9]+)"[^>]*><\/path>|<path[^>]*fill="#([A-Fa-f0-9]+)"[^>]*\/>/g, (match, p1, p2) => {
    const hex = p1 || p2;
    if (isLight('#' + hex)) {
        return ''; // Remove the path
    }
    return match; // Keep the path
});

fs.writeFileSync('src/assets/favicon.svg', newContent);
console.log('Done cleaning svg');
