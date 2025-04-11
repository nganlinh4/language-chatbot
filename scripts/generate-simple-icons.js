const fs = require('fs');
const path = require('path');

// Create icons directory if it doesn't exist
const iconsDir = path.join('public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Define icon sizes
const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Create a simple SVG for each icon size
iconSizes.forEach(size => {
  const svgContent = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#4285F4"/>
    <text x="50%" y="50%" font-family="Arial" font-size="${size/4}" fill="white" text-anchor="middle" dominant-baseline="middle">T</text>
  </svg>`;
  
  fs.writeFileSync(path.join(iconsDir, `icon-${size}x${size}.svg`), svgContent);
  console.log(`Created icon-${size}x${size}.svg`);
});

// Create splash screens
const splashScreens = [
  { name: 'splash-640x1136.svg', width: 640, height: 1136 },
  { name: 'splash-750x1334.svg', width: 750, height: 1334 },
  { name: 'splash-1125x2436.svg', width: 1125, height: 2436 },
  { name: 'splash-1242x2208.svg', width: 1242, height: 2208 },
  { name: 'splash-1536x2048.svg', width: 1536, height: 2048 }
];

// Create a simple SVG for each splash screen
splashScreens.forEach(screen => {
  const svgContent = `<svg width="${screen.width}" height="${screen.height}" xmlns="http://www.w3.org/2000/svg">
    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#4285F4;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#34A853;stop-opacity:1" />
    </linearGradient>
    <rect width="100%" height="100%" fill="url(#grad)"/>
    <text x="50%" y="50%" font-family="Arial" font-size="${screen.width/10}" fill="white" text-anchor="middle" dominant-baseline="middle">Translator</text>
  </svg>`;
  
  fs.writeFileSync(path.join(iconsDir, screen.name), svgContent);
  console.log(`Created ${screen.name}`);
});

console.log('Icon generation complete!');
