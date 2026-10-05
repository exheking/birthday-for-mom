import os
from PIL import Image, ImageDraw

crops_dir = r"c:\Users\exhek\OneDrive\桌面\birthday\images\baby_crops"
files = sorted(os.listdir(crops_dir))

cols = 5
rows = (len(files) + cols - 1) // cols
cell_size = 200

contact = Image.new("RGB", (cols * cell_size, rows * cell_size), (240, 240, 240))
draw = ImageDraw.Draw(contact)

for idx, fn in enumerate(files):
    p = os.path.join(crops_dir, fn)
    img = Image.open(p).resize((cell_size - 10, cell_size - 30))
    c = idx % cols
    r = idx // cols
    contact.paste(img, (c * cell_size + 5, r * cell_size + 5))
    draw.text((c * cell_size + 10, r * cell_size + cell_size - 22), f"{fn}", fill=(20, 20, 20))

contact.save(r"c:\Users\exhek\OneDrive\桌面\birthday\images\verify_crops.png")
print("Saved verify_crops.png")
