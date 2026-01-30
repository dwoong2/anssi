from PIL import Image

def process_favicon(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()
        
        new_data = []
        for item in datas:
            # item is (R, G, B, A)
            # Check if the pixel is dark (black-ISH). 
            # User said "cut out the black parts", so we look for dark pixels.
            # Convert dark pixels to WHITE (255, 255, 255) and keep them opaque.
            # Make everything else transparent.
            
            # Threshold for "black". Adjust if needed. 
            # Assuming the image is black on white or transparent.
            if item[0] < 50 and item[1] < 50 and item[2] < 50:
                 # It's black -> Make it WHITE
                new_data.append((255, 255, 255, 255))
            else:
                # It's not black (likely background) -> Make transparent
                new_data.append((255, 255, 255, 0))

        img.putdata(new_data)
        
        # Crop to content (optional, but good for favicons)
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)

        # Resize to square if not already? Favicons are usually square.
        # Let's check size first. If it's not square, we might want to center it in a square container.
        # For now, let's just save the cropped version. Browsers handle non-square favicons okay, or we can pad it.
        # Let's pad it to be square to be safe.
        
        width, height = img.size
        max_dim = max(width, height)
        
        # Create a new square transparent image
        new_img = Image.new("RGBA", (max_dim, max_dim), (0, 0, 0, 0))
        
        # Paste original centered
        offset = ((max_dim - width) // 2, (max_dim - height) // 2)
        new_img.paste(img, offset)
        
        new_img.save(output_path, "PNG")
        print(f"Success: Processed {input_path} to {output_path}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    input_file = "/Users/dario/.gemini/antigravity/brain/a82d96fd-4d3b-41c3-a928-514ab6a65f1a/uploaded_media_1769814738175.png"
    output_file = "/Users/dario/Downloads/anssi/public/favicon.png"
    process_favicon(input_file, output_file)
