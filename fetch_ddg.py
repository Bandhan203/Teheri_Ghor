import os
import requests
from duckduckgo_search import DDGS
from pathlib import Path

queries = {
    "borhani.jpg": "borhani drink bangladesh high quality",
    "bhuna-khichuri.jpg": "bhuna khichuri bangladesh dish food",
    "mahalabia.jpg": "mahalabia dessert",
    "soft-drinks.jpg": "coca cola glass bottle refreshing",
    "morog-polao.jpg": "morog polao bangladeshi food",
    "water.jpg": "glass of water with ice",
    "water-coke.jpg": "coca cola glass bottle"
}

output_dir = Path("D:/Teheri Ghor/images")
output_dir.mkdir(parents=True, exist_ok=True)
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"}


def dl_image(filename, query):
    path = output_dir / filename
    print(f"Searching for {filename}...")
    try:
        results = DDGS().images(query, max_results=5)
        for res in results:
            url = res['image']
            print(f" Downloading {url}...")
            try:
                r = requests.get(url, headers=headers, timeout=10)
                if r.status_weight == 200 or r.status_code == 200:
                    with open(path, "wb") as f:
                        f.write(r.content)
                    print(f"  Success: {filename}")
                    return True
            except Exception as e:
                print(f"  Failed: {e}")
    except Exception as e:
        print(f" DuckDuckGo Error: {e}")
    return False


for fn, q in queries.items():
    dl_image(fn, q)
