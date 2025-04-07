import { publish } from 'gh-pages';
import { writeFileSync } from 'fs';
import { join } from 'path';

// Ensure dist directory has .nojekyll file
const distDir = join(process.cwd(), 'dist');
writeFileSync(join(distDir, '.nojekyll'), '');

console.log('Publishing to GitHub Pages...');

// Deploy to GitHub Pages
publish('dist', {
  branch: 'gh-pages',
  dotfiles: true,
  message: 'Auto-deploy from deploy-simple.js',
}, (err) => {
  if (err) {
    console.error('Deployment error:', err);
    process.exit(1);
  } else {
    console.log('Deployment complete!');
  }
});
