# Build the app
npm run build

# Create a .nojekyll file in the dist directory
New-Item -ItemType File -Path "dist\.nojekyll" -Force | Out-Null

Write-Host "Predeploy complete! You can now run 'npm run deploy'"
