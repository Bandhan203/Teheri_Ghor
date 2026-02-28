const fs = require("fs");
const path = require("path");
const https = require("https");

const images = [
    { name: "mutton-kacchi.jpg", url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Kolkata_mutton_biryani.jpg" },
    { name: "beef-kacchi.jpg", url: "https://upload.wikimedia.org/wikipedia/commons/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg" },
    { name: "jali-kabab.jpg", url: "https://upload.wikimedia.org/wikipedia/commons/d/df/4th_October_2012_Shami_Kebab.jpg" },
    { name: "beef-tehari.jpg", url: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Tehri_With_Kachumbar_Salad.JPG" },
    { name: "chicken-tikka.jpg", url: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tandoorimumbai.jpg" },
    { name: "mutton-polao.jpg", url: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Afghan_Palo.jpg" },
    { name: "morog-polao.jpg", url: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Sindhi_Biryani.JPG" },
    { name: "bhuna-khichuri.jpg", url: "https://upload.wikimedia.org/wikipedia/commons/6/63/Dall_Khichdi.jpg" },
    { name: "mutton-tehari.jpg", url: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Chicken_Tehari_Bangladesh.JPG" },
    { name: "borhani.jpg", url: "https://upload.wikimedia.org/wikipedia/commons/f/f2/A_Glass_of_Borhani.jpg" },
    { name: "phirni.jpg", url: "https://upload.wikimedia.org/wikipedia/commons/4/46/Kheer.jpg" },
    { name: "mahalabia.jpg", url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Mhallabiyyeh_%28Arabic_milk_pudding%29.jpg" },
    { name: "water.jpg", url: "https://upload.wikimedia.org/wikipedia/commons/0/02/Stilles_Mineralwasser.jpg" },
    { name: "soft-drinks.jpg", url: "https://upload.wikimedia.org/wikipedia/commons/2/27/Coca_Cola_Flasche_-_Original_Taste.jpg" }
];

const targetDir = path.join("d:", "Teheri Ghor", "images");

async function download(url, filename) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { "User-Agent": "MenuImageFetcher/1.0" } }, (res) => {
            if (res.statusCode !== 200) {
                if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 308) {
                    console.log(`Redirecting ${filename}...`);
                    return download(res.headers.location, filename).then(resolve).catch(reject);
                }
                reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
                return;
            }
            res.pipe(fs.createWriteStream(filename))
               .on("finish", () => {
                   console.log(`Downloaded ${filename}`);
                   resolve();
               })
               .on("error", reject);
        }).on("error", reject);
    });
}

(async () => {
    for (const img of images) {
        try {
            await download(img.url, path.join(targetDir, img.name));
        } catch (e) {
            console.error(e.message);
        }
    }
})();
