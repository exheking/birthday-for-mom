import os
from PIL import Image

crops_dir = r"c:\Users\exhek\OneDrive\桌面\birthday\images\baby_crops"
images_dir = r"c:\Users\exhek\OneDrive\桌面\birthday\images"
photo_dir = r"c:\Users\exhek\OneDrive\桌面\birthday\photo"

# 1. Stage 1 cards: 14 unique baby photos (all verified face-centered)
stage1_crop_ids = [
    "crop_01.jpg", # 嬰兒床黃色圍兜笑臉
    "crop_02.jpg", # 嬰兒床看鏡頭
    "crop_03.jpg", # 地墊圍欄爬行抬頭
    "crop_05.jpg", # 沙發拿遙控器咬奶嘴
    "crop_06.jpg", # 長頸鹿衣拿球大笑
    "crop_07.jpg", # 扶床甜甜微笑
    "crop_08.jpg", # 扶床抓球萌照
    "crop_09.jpg", # 沙發格紋圍兜看鏡頭
    "crop_10.jpg", # 沙發靠枕微笑
    "crop_11.jpg", # 沙發格紋圍兜甜笑
    "crop_12.jpg", # 沙發開懷大笑
    "crop_13.jpg", # 露小牙齦大笑 (fixed and verified!)
    "crop_14.jpg", # 傲嬌嘟嘟嘴 (fixed and verified!)
    "crop_15.jpg"  # 床邊天使笑
]

for idx, crop_fn in enumerate(stage1_crop_ids):
    src = os.path.join(crops_dir, crop_fn)
    dst = os.path.join(images_dir, f"baby_card_{idx+1}.jpg")
    img = Image.open(src)
    img.save(dst, quality=95)
print(f"Saved {len(stage1_crop_ids)} Stage 1 baby cards!")

# 2. Stage 2 Level 3 cards: 6 unique baby photos (ZERO overlap with Stage 1!)
stage2_l3_crop_ids = [
    "crop_20.jpg", # 小獅子萌萌笑 🦁
    "crop_21.jpg", # 檸檬連身衣燦笑 🍋
    "crop_16.jpg", # 新生兒小衣衣 🤍
    "crop_17.jpg", # 新生兒舉小手看鏡頭 ✊
    "crop_18.jpg", # 躺著開懷燦笑 💖
    "crop_19.jpg"  # 提籃汽座條紋帽 🧢
]

for idx, crop_fn in enumerate(stage2_l3_crop_ids):
    src = os.path.join(crops_dir, crop_fn)
    dst = os.path.join(images_dir, f"stage2_l3_{idx+1}.jpg")
    img = Image.open(src)
    img.save(dst, quality=95)
print("Saved 6 Stage 2 Level 3 cards!")

# 3. Preview badge thumbnails (for Stage 0 home screen)
# Preview 1: Baby photo
p1 = Image.open(os.path.join(crops_dir, "crop_06.jpg")).resize((200, 200), Image.Resampling.LANCZOS)
p1.save(os.path.join(images_dir, "preview_stage1.jpg"), quality=95)

# Preview 2: Mom & baby photo (baby sling, no mask!)
p2 = Image.open(os.path.join(photo_dir, "04_媽媽與寶寶", "51_媽媽背巾寶寶探頭笑.jpg"))
# Crop showing Mom's face and smiling baby
p2_crop = p2.crop((150, 0, 950, 800)).resize((300, 300), Image.Resampling.LANCZOS)
p2_crop.save(os.path.join(images_dir, "preview_stage2.jpg"), quality=95)

# Preview 3: Jigsaw puzzle photo (120 days mom & baby)
p3 = Image.open(os.path.join(images_dir, "puzzle_mom_baby_sq.jpg")).resize((200, 200), Image.Resampling.LANCZOS)
p3.save(os.path.join(images_dir, "preview_stage3.jpg"), quality=95)

# Preview 4: Sweet marriage registration photo ("寵妻魔人 我們結婚了")
p4 = Image.open(os.path.join(photo_dir, "01_甜蜜夫妻與登記結婚", "26_登記結婚牽手合照.jpg"))
w, h = p4.size
sz = min(w, h)
p4_crop = p4.crop(((w - sz)//2, 60, (w - sz)//2 + sz, 60 + sz)).resize((200, 200), Image.Resampling.LANCZOS)
p4_crop.save(os.path.join(images_dir, "preview_stage4.jpg"), quality=95)

print("Saved all preview badge images!")
