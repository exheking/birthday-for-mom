import os, glob
from PIL import Image, ImageDraw, ImageFont

src_dir = r"c:\Users\exhek\OneDrive\桌面\birthday\photo\06_寶寶成長萌照"
files = sorted(os.listdir(src_dir))
files = [f for f in files if f.endswith(".jpg")]

print(f"Total files in 06: {len(files)}")

# Create a contact sheet: 5 columns x 5 rows, each cell 200x200
cols = 5
rows = (len(files) + cols - 1) // cols
cell_w, cell_h = 240, 240

contact = Image.new("RGB", (cols * cell_w, rows * cell_h), (250, 250, 250))
draw = ImageDraw.Draw(contact)

for idx, fn in enumerate(files):
    p = os.path.join(src_dir, fn)
    img = Image.open(p)
    # Thumbnail fitting within cell
    img.thumbnail((cell_w - 20, cell_h - 40), Image.Resampling.LANCZOS)
    
    col = idx % cols
    row = idx // cols
    x = col * cell_w + (cell_w - img.width) // 2
    y = row * cell_h + 10
    contact.paste(img, (x, y))
    
    # Text label
    short_fn = fn[:14]
    draw.text((col * cell_w + 10, row * cell_h + cell_h - 25), f"{idx+1}. {short_fn}", fill=(20, 20, 20))

contact.save(r"c:\Users\exhek\OneDrive\桌面\birthday\images\contact_sheet_06.png")
print("Saved contact_sheet_06.png")
