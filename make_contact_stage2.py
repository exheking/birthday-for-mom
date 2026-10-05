import os
from PIL import Image, ImageDraw

stage2_imgs = [
    "mom_baby_1_born.jpg",
    "mom_baby_2_sleep.jpg",
    "mom_baby_round1_5_selfie.jpg",
    "mom_baby_round1_6_sleep2.jpg",
    "mom_baby_3_home.jpg",
    "mom_baby_4_bath.jpg",
    "mom_baby_5_walk.jpg",
    "mom_baby_6_look.jpg",
    "mom_baby_round2_3_care.jpg",
    "mom_baby_round2_4_birth_fam.jpg",
    "mom_baby_round2_5_pregnancy.jpg",
    "mom_baby_round2_6_wedding.jpg",
    "mom_baby_round3_1_120days.jpg",
    "baby_card_2.jpg",
    "baby_card_1.jpg",
    "baby_card_3.jpg",
    "baby_card_4.jpg",
    "baby_card_6.jpg"
]

cols = 6
rows = 3
cell_w, cell_h = 200, 200
contact = Image.new("RGB", (cols * cell_w, rows * cell_h), (250, 250, 250))
draw = ImageDraw.Draw(contact)

for idx, fn in enumerate(stage2_imgs):
    p = os.path.join(r"c:\Users\exhek\OneDrive\桌面\birthday\images", fn)
    if os.path.exists(p):
        img = Image.open(p)
        img.thumbnail((cell_w - 20, cell_h - 40), Image.Resampling.LANCZOS)
        col = idx % cols
        row = idx // cols
        x = col * cell_w + (cell_w - img.width) // 2
        y = row * cell_h + 10
        contact.paste(img, (x, y))
        draw.text((col * cell_w + 10, row * cell_h + cell_h - 25), f"{idx+1}. {fn[:12]}", fill=(20, 20, 20))

contact.save(r"c:\Users\exhek\OneDrive\桌面\birthday\images\contact_sheet_stage2.png")
print("Saved contact_sheet_stage2.png")
