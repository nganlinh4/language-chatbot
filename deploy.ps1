# Build the app
Write-Host "Building the application..."
npm run build

# Create a temporary directory for deployment
if (Test-Path -Path "tmp_deploy") {
    Remove-Item -Recurse -Force "tmp_deploy"
}
New-Item -ItemType Directory -Path "tmp_deploy" | Out-Null

# Copy the built files to the temporary directory
Copy-Item -Recurse -Path "dist\*" -Destination "tmp_deploy\"

# Create a .nojekyll file to bypass Jekyll processing
New-Item -ItemType File -Path "tmp_deploy\.nojekyll" | Out-Null

# Initialize git in the temporary directory
Set-Location -Path "tmp_deploy"
git init
git add .
git commit -m "Deploy to GitHub Pages"

# Force push to the gh-pages branch
git push -f https://github.com/nganlinh4/language-chatbot.git main:gh-pages

# Clean up
Set-Location -Path ".."
Remove-Item -Recurse -Force "tmp_deploy"

Write-Host "Deployment complete!"
