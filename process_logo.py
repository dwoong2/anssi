import sys
from PIL import Image
import os

def process_logo(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        datas = img.getdata()
        new_data = []
        
        for item in datas:
            # item is (R, G, B, A)
            # If white (or very close to white), make transparent
            if item[0] > 200 and item[1] > 200 and item[2] > 200:
                new_data.append((255, 255, 255, 0))
            # If black (or very close to black), make white
            elif item[0] < 50 and item[1] < 50 and item[2] < 50:
                new_data.append((255, 255, 255, 255))
            else:
                # Keep other pixels as is? Or maybe make them white too if they are part of the text?
                # The user said: "Remove white parts (transparent), Make black parts white"
                # For safety, let's stick to the strict rule, but maybe allow some tolerance.
                # If it's not white, it's likely the content. Let's make it white for contrast?
                # Actually, the user specifically said "Black parts -> White".
                # Let's assume the logo is mostly B/W. 
                # To be safe for anti-aliasing, we might want to preserve alpha but change color to white.
                # But simple thresholding is safer for "Black -> White" mapping.
                
                # Let's just preserve non-white pixels but force them to white color?
                # If it's not white, it's the logo.
                new_data.append((255, 255, 255, 255))

        img.putdata(new_data)
        
        # Resize to width 100px
        basewidth = 100
        wpercent = (basewidth / float(img.size[0]))
        hsize = int((float(img.size[1]) * float(wpercent)))
        img = img.resize((basewidth, hsize), Image.Resampling.LANCZOS)
        
        img.save(output_path, "PNG")
        print(f"Successfully processed logo to {output_path}")
        
    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    input_file = "/Users/dario/.gemini/antigravity/brain/454e0062-6882-4074-8b71-13db29c863e8/uploaded_media_1769217849409.png"
    output_file = "/Users/dario/Downloads/anssi/src/assets/logo_white.png"
    process_logo(input_file, output_file)
