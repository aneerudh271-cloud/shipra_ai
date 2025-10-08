@echo off
echo 🚀 Deploying Shipra AI Mobile App...
echo.

echo 📦 Creating deployment package...
if not exist "dist" mkdir dist

echo 📋 Copying files...
if not exist "dist\public" mkdir dist\public
copy "index.html" "dist\" >nul
copy "public\manifest.json" "dist\public\" >nul
copy "README.md" "dist\" >nul

echo.
echo ✅ Deployment package created in 'dist' folder
echo.
echo 🌐 To deploy manually:
echo 1. Upload contents of 'dist' folder to any static hosting service
echo 2. Or use GitHub Pages if you have a repository set up
echo 3. Or use Netlify: drag and drop the 'dist' folder
echo.
echo 🔗 Popular free hosting options:
echo • Netlify (drag & drop)
echo • Vercel (git-based)
echo • GitHub Pages (git repository)
echo • Firebase Hosting
echo.
echo 📱 Your app will be accessible via web browser and mobile devices!
echo.
pause