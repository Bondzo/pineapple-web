from PIL import Image, ImageDraw

nobg_path = r"C:\Project\pineapple\public\logo_nobg.png"
out_fav_path = r"C:\Project\pineapple\public\favicon.png"

nobg_img = Image.open(nobg_path).convert("RGBA")
fav_size = 256

# Create transparent base
base = Image.new("RGBA", (fav_size, fav_size), (0, 0, 0, 0))
draw = ImageDraw.Draw(base)

# Draw solid white circle with subtle light border so circle shape is clearly defined
draw.ellipse((4, 4, fav_size - 5, fav_size - 5), fill=(255, 255, 255, 255), outline=(225, 225, 225, 255), width=3)

# Scale logo to fit nicely in circle
thumb = nobg_img.copy()
thumb.thumbnail((fav_size - 60, fav_size - 60), Image.Resampling.LANCZOS)
tw, th = thumb.size
offset_x = (fav_size - tw) // 2
offset_y = (fav_size - th) // 2

base.paste(thumb, (offset_x, offset_y), thumb)
base.save(out_fav_path, "PNG")
print("New favicon with crisp circle saved, size:", base.size)
