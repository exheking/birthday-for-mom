@echo off
chcp 65001 >nul
title 給親愛的老婆・生日快樂 遊戲啟動器
echo ========================================================
echo        🎂 給親愛的老婆・生日快樂 🎂
echo ========================================================
echo.
echo 正在啟動遊戲中，請稍候...
echo.

:: 優先檢測是否有 Python 環境，有 Python 則啟動輕量本機伺服器（可避免瀏覽器本機檔案權限問題）
where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] 偵測到 Python 環境，啟動本機伺服器以獲得最佳音效與影片效果...
    echo 請不要關閉此黑色視窗，關閉後伺服器即停止。
    start http://localhost:8000
    python -m http.server 8000
) else (
    echo [OK] 直接以預設瀏覽器開啟遊戲...
    start "" "index.html"
)
