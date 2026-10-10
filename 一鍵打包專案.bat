@echo off
chcp 65001 >nul
title 專案一鍵打包工具
echo ========================================================
echo        🎂 給親愛的老婆・生日快樂 專案一鍵打包工具 🎂
echo ========================================================
echo.
python "%~dp0package_project.py"
echo.
echo 按任意鍵將直接在檔案總管中開啟桌面以檢視壓縮檔...
pause >nul
explorer.exe /select,"%~dp0..\birthday_完整專案包.zip"
