@echo off
echo Creating clean deployment package...
echo.

REM Create deploy folder
if exist "badoota-deploy" rmdir /s /q "badoota-deploy"
mkdir "badoota-deploy"

echo Copying essential files...

REM Copy source files
xcopy /E /I /Y "app" "badoota-deploy\app"
xcopy /E /I /Y "public" "badoota-deploy\public"

REM Copy config files
copy "package.json" "badoota-deploy\"
copy "next.config.mjs" "badoota-deploy\" 2>nul
copy "tailwind.config.ts" "badoota-deploy\"
copy "tsconfig.json" "badoota-deploy\"
copy "postcss.config.mjs" "badoota-deploy\"
copy ".vercelignore" "badoota-deploy\"

echo.
echo ✅ Clean package created in: badoota-deploy\
echo.
echo Package size (without node_modules):
du -sh badoota-deploy 2>nul || echo Calculating...
echo.
echo Now upload the "badoota-deploy" folder to Vercel!
echo.
pause
