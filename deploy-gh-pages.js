import { publish } from 'gh-pages';
import { writeFileSync } from 'fs';
import { join } from 'path';

// Create .nojekyll file
const distDir = join(process.cwd(), 'dist');
writeFileSync(join(distDir, '.nojekyll'), '');

// Deploy to GitHub Pages
publish(
  'dist',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/nganlinh4/language-chatbot.git',
    message: 'Auto-deploy from deploy-gh-pages.js',
    dotfiles: true,
    silent: false,
  },
  (err) => {
    if (err) {
      console.error('Deployment error:', err);
      process.exit(1);
    } else {
      console.log('Deployment complete!');
    }
  }
);
