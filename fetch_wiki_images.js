
const titles = ["Bottled_water", "Glass_of_water"];
async function fetchWikiImage(title) {
  try {
    const res = await fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + title);
    const data = await res.json();
    console.log(title, data.originalimage ? data.originalimage.source : "No image");
  } catch (e) { console.log(title, "Error"); }
}
(async () => {
    for (const title of titles) {
        await fetchWikiImage(title);
    }
})();

