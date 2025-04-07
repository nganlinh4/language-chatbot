// Simple script to deploy to GitHub Pages
import { execSync } from 'child_process';
import { readFileSync } from 'fs';

// Get package.json data
const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

console.log(`Deploying ${pkg.name} to GitHub Pages...`);

try {
  // Build the app
  console.log('Building the application...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Deploy to GitHub Pages
  console.log('Deploying to GitHub Pages...');
  execSync('npm run deploy', { stdio: 'inherit' });
  
  console.log('Deployment complete!');
} catch (error) {
  console.error('Deployment failed:', error);
  process.exit(1);
}
