import os
from PIL import Image

src_dir = r"c:\Users\exhek\OneDrive\桌面\birthday\photo\06_寶寶成長萌照"
out_dir = r"c:\Users\exhek\OneDrive\桌面\birthday\images\baby_crops"
os.makedirs(out_dir, exist_ok=True)

# List of files and their tuned face centers (cx, cy) and crop size
# image size is 960x1280
crops_config = [
    # 1. 01_嬰兒床黃色圍兜笑臉.jpg
    {"fn": "01_嬰兒床黃色圍兜笑臉.jpg", "cx": 470, "cy": 580, "size": 650, "label": "黃圍兜笑臉 💛"},
    # 2. 02_嬰兒床看鏡頭.jpg
    {"fn": "02_嬰兒床看鏡頭.jpg", "cx": 480, "cy": 480, "size": 600, "label": "大眼睛看鏡頭 👀"},
    # 3. 04_地墊圍欄爬行抬頭看鏡頭.jpg
    {"fn": "04_地墊圍欄爬行抬頭看鏡頭.jpg", "cx": 500, "cy": 460, "size": 550, "label": "圍欄小探險 🌟"},
    # 4. 05_抱著特寫微笑.jpg
    {"fn": "05_抱著特寫微笑.jpg", "cx": 500, "cy": 480, "size": 550, "label": "溫暖懷中笑 🥰"},
    # 5. 06_沙發拿遙控器咬奶嘴.jpg
    {"fn": "06_沙發拿遙控器咬奶嘴.jpg", "cx": 480, "cy": 550, "size": 650, "label": "咬奶嘴小皮蛋 🍼"},
    # 6. 11_嬰兒床長頸鹿衣拿球大笑.jpg
    {"fn": "11_嬰兒床長頸鹿衣拿球大笑.jpg", "cx": 480, "cy": 460, "size": 600, "label": "長頸鹿拿球笑 🦒"},
    # 7. 12_嬰兒床拿球微笑.jpg
    {"fn": "12_嬰兒床拿球微笑.jpg", "cx": 480, "cy": 480, "size": 600, "label": "扶床甜甜笑 🌸"},
    # 8. 13_嬰兒床扶欄拿球.jpg
    {"fn": "13_嬰兒床扶欄拿球.jpg", "cx": 500, "cy": 460, "size": 600, "label": "手抓彩球球 ⚽"},
    # 9. 14_沙發靠枕看鏡頭.jpg
    {"fn": "14_沙發靠枕看鏡頭.jpg", "cx": 520, "cy": 500, "size": 550, "label": "沙發小靠枕 🛋️"},
    # 10. 15_沙發靠枕微笑.jpg
    {"fn": "15_沙發靠枕微笑.jpg", "cx": 500, "cy": 500, "size": 580, "label": "抱抱枕甜笑 💕"},
    # 11. 16_沙發坐姿看鏡頭笑.jpg
    {"fn": "16_沙發坐姿看鏡頭笑.jpg", "cx": 480, "cy": 530, "size": 620, "label": "格紋圍兜兜 ✨"},
    # 12. 17_沙發坐姿開懷大笑.jpg
    {"fn": "17_沙發坐姿開懷大笑.jpg", "cx": 480, "cy": 500, "size": 600, "label": "沙發開懷笑 😆"},
    # 13. 20_嬰兒床扶欄露牙齦大笑.jpg -> previously cut off!
    {"fn": "20_嬰兒床扶欄露牙齦大笑.jpg", "cx": 480, "cy": 720, "size": 620, "label": "露小牙齦大笑 😁"},
    # 14. 21_嬰兒床嘟嘴萌照.jpg -> previously cut off!
    {"fn": "21_嬰兒床嘟嘴萌照.jpg", "cx": 440, "cy": 680, "size": 600, "label": "傲嬌嘟嘟嘴 👶"},
    # 15. 22_嬰兒床甜甜微笑.jpg
    {"fn": "22_嬰兒床甜甜微笑.jpg", "cx": 480, "cy": 620, "size": 600, "label": "床邊天使笑 👼"},
    # 16. 43_新生兒黑白格床單.jpg
    {"fn": "43_新生兒黑白格床單.jpg", "cx": 480, "cy": 380, "size": 600, "label": "新生兒小衣衣 🤍"},
    # 17. 44_新生兒舉小手看鏡頭.jpg
    {"fn": "44_新生兒舉小手看鏡頭.jpg", "cx": 480, "cy": 460, "size": 620, "label": "小小拳頭揮揮 ✊"},
    # 18. 45_嬰兒躺著開懷燦笑.jpg
    {"fn": "45_嬰兒躺著開懷燦笑.jpg", "cx": 480, "cy": 380, "size": 600, "label": "躺著開懷燦笑 💖"},
    # 19. 47_提籃汽座戴條紋帽.jpg
    {"fn": "47_提籃汽座戴條紋帽.jpg", "cx": 480, "cy": 380, "size": 600, "label": "條紋小暖帽 🧢"},
    # 20. 49_穿小獅子衣服笑臉.jpg
    {"fn": "49_穿小獅子衣服笑臉.jpg", "cx": 480, "cy": 360, "size": 620, "label": "小獅子萌萌笑 🦁"},
    # 21. 52_地墊檸檬衣趴著燦笑.jpg
    {"fn": "52_地墊檸檬衣趴著燦笑.jpg", "cx": 480, "cy": 480, "size": 600, "label": "檸檬連身衣 🍋"}
]

for idx, c in enumerate(crops_config):
    p = os.path.join(src_dir, c["fn"])
    img = Image.open(p)
    w, h = img.size
    
    half = c["size"] // 2
    x0 = max(0, min(w - c["size"], c["cx"] - half))
    y0 = max(0, min(h - c["size"], c["cy"] - half))
    x1 = x0 + c["size"]
    y1 = y0 + c["size"]
    
    cropped = img.crop((x0, y0, x1, y1))
    cropped = cropped.resize((500, 500), Image.Resampling.LANCZOS)
    
    out_name = f"crop_{idx+1:02d}.jpg"
    cropped.save(os.path.join(out_dir, out_name), quality=95)

print("Finished cropping 21 baby photos!")
