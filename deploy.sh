#!/bin/bash

# Build the app
echo "Building the application..."
npm run build

# Create .nojekyll file
echo "Creating .nojekyll file..."
touch dist/.nojekyll

# Configure Git
echo "Configuring Git..."
git config --global user.email "github-actions@github.com"
git config --global user.name "GitHub Actions"

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npx gh-pages -d dist -t

echo "Deployment complete!"
