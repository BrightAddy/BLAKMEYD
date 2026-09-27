import re

with open(r'c:\Users\brigh\Desktop\blakmeyd\src\app\lookbook\LookbookGallery.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's check for any em-dash or en-dash in the file
em_dashes = [m.start() for m in re.finditer(r'[—–]', content)]
print(f'Found {len(em_dashes)} em/en dashes in file.')

# Check all user-facing strings
user_strings = [
    "KENTE GOWN",
    "BRIDAL ROBE",
    "RECEPTION OUTFIT",
    "HAND FINISHED EMBROIDERY",
    "A CELEBRATION OF HERITAGE.",
    "MODERN GRACE FOR A TIMELESS MOMENT.",
    "EFFORTLESS ELEGANCE FOR YOUR NEXT CHAPTER.",
    "VIEW PROJECT",
]
for s in user_strings:
    if '-' in s or '—' in s or '–' in s:
        print('Alert:', s)
print('Done check.')
