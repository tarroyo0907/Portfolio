const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const portfolioDir = path.join(outDir, 'Portfolio');

// Ensure the Portfolio folder exists
if (!fs.existsSync(portfolioDir)) {
  fs.mkdirSync(portfolioDir);
}

// Move all files and folders from `out` to `out/Portfolio`
fs.readdirSync(outDir).forEach((file) => {
  if (file !== 'Portfolio') {
    const oldPath = path.join(outDir, file);
    const newPath = path.join(portfolioDir, file);
    fs.renameSync(oldPath, newPath);
  }
});

console.log('Moved build output to the Portfolio/ folder.');