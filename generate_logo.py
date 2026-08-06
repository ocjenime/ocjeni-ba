from PIL import Image, ImageDraw, ImageFont
import math
import os

# Brand colors
NAVY = "#0A1628"
GOLD = "#D4AF37"
GOLD_LIGHT = "#F4E4A6"
GOLD_DARK = "#B8962E"
WHITE = "#FFFFFF"
CREAM = "#FFFDF5"

OUTPUT_DIR = "frontend/public/images/logos"
os.makedirs(OUTPUT_DIR, exist_ok=True)


def get_font(name, size):
    """Try to load a font by name, fallback to default."""
    font_map = {
        "Georgia-Bold": "georgiab.ttf",
        "Georgia": "georgia.ttf",
        "Arial-Bold": "arialbd.ttf",
        "Arial-Black": "arialbd.ttf",
        "Arial": "arial.ttf",
        "Times-Bold": "timesbd.ttf",
        "Times": "times.ttf",
        "Impact": "impact.ttf",
        "Calibri-Bold": "calibrib.ttf",
        "Calibri": "calibri.ttf",
        "Tahoma-Bold": "tahomabd.ttf",
        "Tahoma": "tahoma.ttf",
        "Verdana-Bold": "verdanab.ttf",
        "Verdana": "verdana.ttf",
        "SegoeUI-Bold": "segoeuib.ttf",
        "SegoeUI": "segoeui.ttf",
    }
    
    filename = font_map.get(name)
    if filename:
        path = f"C:/Windows/Fonts/{filename}"
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception as e:
                print(f"Failed to load {path}: {e}")
    
    # Try case-insensitive search
    fonts_dir = "C:/Windows/Fonts"
    if os.path.isdir(fonts_dir):
        target = name.lower().replace("-", "")
        for f in os.listdir(fonts_dir):
            if f.lower().endswith(('.ttf', '.ttc')) and target in f.lower():
                try:
                    return ImageFont.truetype(os.path.join(fonts_dir, f), size)
                except Exception:
                    pass
    
    return ImageFont.load_default()


def draw_star(draw, center, radius, fill, outline=None, outline_width=0):
    """Draw a 5-pointed star."""
    cx, cy = center
    points = []
    for i in range(10):
        angle = math.pi / 2 + i * math.pi / 5
        r = radius if i % 2 == 0 else radius / 2.5
        x = cx + r * math.cos(angle)
        y = cy - r * math.sin(angle)
        points.append((x, y))
    draw.polygon(points, fill=fill, outline=outline)
    if outline and outline_width > 0:
        for i in range(len(points)):
            draw.line([points[i], points[(i + 1) % len(points)]], fill=outline, width=outline_width)


def draw_curved_text(draw, text, center, radius, font, fill, center_angle, top=True):
    """
    Draw text along a circular arc with letters upright and readable.
    center_angle: angle where the center of the text should be (radians, image coords)
    top: True for top arc, False for bottom arc
    """
    cx, cy = center
    
    # Calculate total angle width
    total_width = sum(font.getlength(ch) for ch in text)
    spacing = font.getlength(" ") * 0.08
    total_width += spacing * (len(text) - 1)
    
    angle_per_px = 0.95 / radius
    half_angle = total_width * angle_per_px / 2
    
    if top:
        # Top arc: left-to-right means decreasing angle (left is > center, right is < center)
        start_angle = center_angle + half_angle
        step = -1
    else:
        # Bottom arc: left-to-right means increasing angle
        start_angle = center_angle - half_angle
        step = +1
    
    current_angle = start_angle
    
    for ch in text:
        char_width = font.getlength(ch) + spacing
        angle = current_angle + step * (char_width * angle_per_px / 2)
        
        # Position on circle
        x = cx + radius * math.cos(angle)
        y = cy - radius * math.sin(angle)
        
        # Rotation for this character: simple tangent following
        char_angle_deg = math.degrees(angle)
        if top:
            # Text follows top arc, readable from front
            rot_angle = char_angle_deg - 90
        else:
            # Text follows bottom arc, readable from front
            rot_angle = char_angle_deg - 270
        
        # Create small image for character, centered
        bbox = font.getbbox(ch)
        text_w = int(bbox[2] - bbox[0])
        text_h = int(bbox[3] - bbox[1])
        char_w = text_w + 20
        char_h = text_h + 20
        char_img = Image.new("RGBA", (char_w, char_h), (0, 0, 0, 0))
        char_draw = ImageDraw.Draw(char_img)
        draw_x = 10 + (char_w - text_w) / 2 - bbox[0]
        draw_y = 10 + (char_h - text_h) / 2 - bbox[1]
        char_draw.text((draw_x, draw_y), ch, font=font, fill=fill)
        
        rotated = char_img.rotate(rot_angle, expand=1, resample=Image.BICUBIC, center=(char_w / 2, char_h / 2))
        rx = int(x - rotated.width / 2)
        ry = int(y - rotated.height / 2)
        draw._image.paste(rotated, (rx, ry), rotated)
        
        current_angle += step * char_width * angle_per_px


def create_badge_logo(size=1024):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    cx, cy = size // 2, size // 2
    
    # Outer rings
    outer_r = size * 0.48
    mid_r = size * 0.435
    inner_r = size * 0.375
    
    # Shadow
    shadow_r = outer_r + 8
    draw.ellipse([cx - shadow_r, cy - shadow_r, cx + shadow_r, cy + shadow_r], fill="#00000030")
    
    # Outer gold ring
    draw.ellipse([cx - outer_r, cy - outer_r, cx + outer_r, cy + outer_r], fill=GOLD, outline=GOLD_LIGHT, width=6)
    draw.ellipse([cx - outer_r + 12, cy - outer_r + 12, cx + outer_r - 12, cy + outer_r - 12], fill=GOLD, outline=GOLD_DARK, width=2)
    
    # Navy ring
    draw.ellipse([cx - mid_r, cy - mid_r, cx + mid_r, cy + mid_r], fill=NAVY, outline=GOLD, width=4)
    
    # Inner gold ring
    draw.ellipse([cx - inner_r, cy - inner_r, cx + inner_r, cy + inner_r], fill="#0D1B2E", outline=GOLD, width=3)
    
    # Decorative dots around inner ring
    n_dots = 36
    dot_r = size * 0.005
    dot_radius = size * 0.405
    for i in range(n_dots):
        angle = 2 * math.pi * i / n_dots
        dx = cx + dot_radius * math.cos(angle)
        dy = cy + dot_radius * math.sin(angle)
        draw.ellipse([dx - dot_r, dy - dot_r, dx + dot_r, dy + dot_r], fill=GOLD)
    
    # Decorative corner separators
    for base_angle in [math.pi * 0.75, math.pi * 1.25]:
        for offset in [-0.08, 0.08]:
            angle = base_angle + offset
            r1 = size * 0.345
            r2 = size * 0.385
            x1 = cx + r1 * math.cos(angle)
            y1 = cy - r1 * math.sin(angle)
            x2 = cx + r2 * math.cos(angle)
            y2 = cy - r2 * math.sin(angle)
            draw.line([(x1, y1), (x2, y2)], fill=GOLD, width=3)
    
    # Stars at top
    star_y = size * 0.235
    star_radius = size * 0.038
    star_spacing = size * 0.085
    for i in range(5):
        sx = cx + (i - 2) * star_spacing
        draw_star(draw, (sx, star_y), star_radius, fill=GOLD, outline=GOLD_LIGHT, outline_width=1)
    
    # Central O monogram
    o_font = get_font("Georgia-Bold", int(size * 0.45))
    bbox = draw.textbbox((0, 0), "O", font=o_font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    tx = cx - text_w / 2
    ty = cy - text_h / 2 - size * 0.015
    
    # Elegant shadow
    draw.text((tx + 5, ty + 5), "O", font=o_font, fill="#00000050")
    draw.text((tx, ty), "O", font=o_font, fill=GOLD_LIGHT)
    
    # Curved text at top: "ZNAK KVALITETA"
    top_font = get_font("Arial-Bold", int(size * 0.052))
    draw_curved_text(draw, "ZNAK KVALITETA", (cx, cy), size * 0.375, top_font, GOLD, center_angle=math.pi / 2, top=True)
    
    # Curved text at bottom: "OCJENI.BA"
    bottom_font = get_font("Arial-Black", int(size * 0.062))
    draw_curved_text(draw, "OCJENI.BA", (cx, cy), size * 0.375, bottom_font, WHITE, center_angle=3 * math.pi / 2, top=False)
    
    return img


def create_horizontal_logo(width=1800, height=500):
    img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Badge on left
    badge_size = int(height * 0.85)
    badge = create_badge_logo(badge_size)
    bx = int(height * 0.08)
    by = (height - badge_size) // 2
    img.paste(badge, (bx, by), badge)
    
    # Text area on right
    text_x = bx + badge_size + height * 0.18
    
    # OCJENI.BA
    main_font = get_font("Arial-Black", int(height * 0.48))
    draw.text((text_x + 3, height * 0.18 + 3), "OCJENI.BA", font=main_font, fill="#00000040")
    draw.text((text_x, height * 0.18), "OCJENI.BA", font=main_font, fill=NAVY)
    
    # Decorative line
    line_y = int(height * 0.58)
    line_end = text_x + width * 0.30
    draw.line([(text_x, line_y), (line_end, line_y)], fill=NAVY, width=4)
    draw.ellipse([line_end - 5, line_y - 5, line_end + 5, line_y + 5], fill=GOLD)
    
    # Tagline
    tag_font = get_font("Arial-Bold", int(height * 0.16))
    draw.text((text_x, height * 0.68), "ZNAK KVALITETA", font=tag_font, fill=GOLD)
    
    return img


def create_wide_banner(width=2600, height=600):
    """Banner with dark background."""
    img = Image.new("RGBA", (width, height), NAVY)
    draw = ImageDraw.Draw(img)
    
    # Badge on left
    badge_size = int(height * 0.75)
    badge = create_badge_logo(badge_size)
    bx = int(height * 0.15)
    by = (height - badge_size) // 2
    img.paste(badge, (bx, by), badge)
    
    text_x = bx + badge_size + height * 0.25
    
    main_font = get_font("Arial-Black", int(height * 0.45))
    draw.text((text_x, height * 0.22), "OCJENI.BA", font=main_font, fill=WHITE)
    
    tag_font = get_font("Arial-Bold", int(height * 0.14))
    draw.text((text_x, height * 0.70), "ZNAK KVALITETA", font=tag_font, fill=GOLD)
    
    return img


def create_favicon(size=512):
    return create_badge_logo(size)


def create_svg_logo():
    """Create a simple SVG version of the badge."""
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:{GOLD_LIGHT};stop-opacity:1" />
      <stop offset="100%" style="stop-color:{GOLD};stop-opacity:1" />
    </linearGradient>
  </defs>
  <circle cx="512" cy="512" r="490" fill="{GOLD}" stroke="{GOLD_LIGHT}" stroke-width="8"/>
  <circle cx="512" cy="512" r="445" fill="{NAVY}" stroke="{GOLD}" stroke-width="6"/>
  <circle cx="512" cy="512" r="384" fill="#0D1B2E" stroke="{GOLD}" stroke-width="4"/>
  <text x="512" y="340" text-anchor="middle" fill="{GOLD}" font-family="Arial, sans-serif" font-weight="bold" font-size="52">ZNAK KVALITETA</text>
  <text x="512" y="620" text-anchor="middle" fill="{WHITE}" font-family="Arial, sans-serif" font-weight="900" font-size="62">OCJENI.BA</text>
  <text x="512" y="520" text-anchor="middle" fill="url(#goldGrad)" font-family="Georgia, serif" font-weight="bold" font-size="360">O</text>
</svg>"""
    return svg


if __name__ == "__main__":
    # Generate badge
    badge = create_badge_logo(1024)
    badge.save(os.path.join(OUTPUT_DIR, "ocijeni-ba-badge.png"), "PNG")
    print("Saved badge logo")
    
    # Generate horizontal
    horiz = create_horizontal_logo(1800, 500)
    horiz.save(os.path.join(OUTPUT_DIR, "ocijeni-ba-horizontal.png"), "PNG")
    print("Saved horizontal logo")
    
    # Generate wide banner
    banner = create_wide_banner(2600, 600)
    banner.save(os.path.join(OUTPUT_DIR, "ocijeni-ba-banner.png"), "PNG")
    print("Saved banner")
    
    # Generate favicon
    fav = create_favicon(512)
    fav.save(os.path.join(OUTPUT_DIR, "ocijeni-ba-favicon.png"), "PNG")
    print("Saved favicon")
    
    # Generate SVG
    svg = create_svg_logo()
    with open(os.path.join(OUTPUT_DIR, "ocijeni-ba-badge.svg"), "w", encoding="utf-8") as f:
        f.write(svg)
    print("Saved SVG logo")
    
    print(f"\nAll logos saved to: {OUTPUT_DIR}")
