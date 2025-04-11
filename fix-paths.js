const fs = require('fs');
const path = require('path');

// Read the built index.html file
const indexPath = path.join('dist', 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Fix asset paths by adding /language-chatbot prefix
indexContent = indexContent.replace(/src="\/assets\//g, 'src="/language-chatbot/assets/');
indexContent = indexContent.replace(/href="\/assets\//g, 'href="/language-chatbot/assets/');

// Fix icon paths
indexContent = indexContent.replace(/href="\/icons\//g, 'href="/language-chatbot/icons/');

// Write the fixed content back to the file
fs.writeFileSync(indexPath, indexContent);

console.log('Fixed paths in index.html');

// Copy icons to dist folder
const sourceIconsDir = path.join('public', 'icons');
const destIconsDir = path.join('dist', 'icons');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destIconsDir)) {
  fs.mkdirSync(destIconsDir, { recursive: true });
}

// Copy all files from source to destination
fs.readdirSync(sourceIconsDir).forEach(file => {
  const sourcePath = path.join(sourceIconsDir, file);
  const destPath = path.join(destIconsDir, file);
  fs.copyFileSync(sourcePath, destPath);
  console.log(`Copied ${file} to dist/icons/`);
});

// Copy manifest.json to dist folder
const sourceManifest = path.join('public', 'manifest.json');
const destManifest = path.join('dist', 'manifest.json');
fs.copyFileSync(sourceManifest, destManifest);
console.log('Copied manifest.json to dist/');

// Fix paths in manifest.json
let manifestContent = fs.readFileSync(destManifest, 'utf8');
manifestContent = manifestContent.replace(/"src": "icons\//g, '"src": "/language-chatbot/icons/');
fs.writeFileSync(destManifest, manifestContent);
console.log('Fixed paths in manifest.json');

console.log('All paths fixed and files copied successfully!');
