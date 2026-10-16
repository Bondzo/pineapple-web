import os
from PIL import Image, ImageDraw

src_path = r"C:\Project\pineapple\public\logo.jpeg"
out_nobg_path = r"C:\Project\pineapple\public\logo_nobg.png"
out_fav_path = r"C:\Project\pineapple\public\favicon.png"

img = Image.open(src_path).convert("RGBA")
width, height = img.size

# 1. Remove pure / near white background for logo_nobg.png
# The background in WhatsApp image is near white (e.g. > 240)
datas = img.getdata()
new_data = []
for item in datas:
    # item is (r, g, b, a)
    r, g, b, a = item
    if r > 238 and g > 238 and b > 238:
        # Transparent
        new_data.append((255, 255, 255, 0))
    else:
        new_data.append(item)

nobg_img = Image.new("RGBA", (width, height))
nobg_img.putdata(new_data)
# Crop bounding box of content
bbox = nobg_img.getbbox()
if bbox:
    nobg_img = nobg_img.crop(bbox)
nobg_img.save(out_nobg_path, "PNG")
print("logo_nobg.png saved, size:", nobg_img.size)

# 2. Make circular favicon with crisp white background
fav_size = 128
fav = Image.new("RGBA", (fav_size, fav_size), (0, 0, 0, 0))

# Draw white circle
mask = Image.new("L", (fav_size, fav_size), 0)
draw_mask = ImageDraw.Draw(mask)
draw_mask.ellipse((2, 2, fav_size - 3, fav_size - 3), fill=255)

white_circle = Image.new("RGBA", (fav_size, fav_size), (255, 255, 255, 255))

# Paste nobg logo scaled inside circle
thumb = nobg_img.copy()
thumb.thumbnail((fav_size - 28, fav_size - 28), Image.Resampling.LANCZOS)
tw, th = thumb.size
offset_x = (fav_size - tw) // 2
offset_y = (fav_size - th) // 2

white_circle.paste(thumb, (offset_x, offset_y), thumb)
fav.paste(white_circle, (0, 0), mask)
fav.save(out_fav_path, "PNG")
print("favicon.png saved, size:", fav.size)
