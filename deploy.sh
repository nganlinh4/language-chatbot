#!/bin/bash

# Build the app
echo "Building the application..."
npm run build

# Create a temporary directory for deployment
mkdir -p tmp_deploy

# Copy the built files to the temporary directory
cp -r dist/* tmp_deploy/

# Create a .nojekyll file to bypass Jekyll processing
touch tmp_deploy/.nojekyll

# Initialize git in the temporary directory
cd tmp_deploy
git init
git add .
git commit -m "Deploy to GitHub Pages"

# Force push to the gh-pages branch
git push -f https://github.com/nganlinh4/language-chatbot.git main:gh-pages

# Clean up
cd ..
rm -rf tmp_deploy

echo "Deployment complete!"
