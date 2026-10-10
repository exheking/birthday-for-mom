#!/bin/bash
cd "$(dirname "$0")"
echo "🎂 給親愛的老婆・生日快樂 正在啟動..."
if command -v python3 &>/dev/null; then
    open "http://localhost:8000" 2>/dev/null || xdg-open "http://localhost:8000" 2>/dev/null &
    python3 -m http.server 8000
else
    open index.html 2>/dev/null || xdg-open index.html 2>/dev/null
fi
