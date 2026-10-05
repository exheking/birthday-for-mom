import os
from PIL import Image, ImageDraw

src_dir = r"c:\Users\exhek\OneDrive\桌面\birthday\photo\04_媽媽與寶寶"
files = sorted([f for f in os.listdir(src_dir) if f.endswith(".jpg")])

cols = 5
rows = 1
cell_w, cell_h = 240, 240
contact = Image.new("RGB", (cols * cell_w, rows * cell_h), (250, 250, 250))
draw = ImageDraw.Draw(contact)

for idx, fn in enumerate(files):
    p = os.path.join(src_dir, fn)
    img = Image.open(p)
    img.thumbnail((cell_w - 20, cell_h - 40), Image.Resampling.LANCZOS)
    x = idx * cell_w + (cell_w - img.width) // 2
    y = 10
    contact.paste(img, (x, y))
    draw.text((idx * cell_w + 10, cell_h - 25), f"{idx+1}. {fn[:12]}", fill=(20, 20, 20))

contact.save(r"c:\Users\exhek\OneDrive\桌面\birthday\images\contact_sheet_04.png")
print("Saved contact_sheet_04.png")
