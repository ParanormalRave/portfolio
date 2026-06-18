from rembg import remove
from PIL import Image
import io

src = "public/displaypic.jpg"
dst = "public/displaypic.png"

with open(src, "rb") as f:
    data = f.read()

out = remove(data)
img = Image.open(io.BytesIO(out)).convert("RGBA")
img.save(dst)
print("saved", dst, img.size)
