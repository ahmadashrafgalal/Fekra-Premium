// Crops source artwork into public/art  (run: node scripts/prepare-images.js)
const Jimp = require("jimp");
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const src = (f) => path.join(root, "source", f);
const out = (f) => path.join(root, "public", "art", f);
fs.mkdirSync(path.join(root, "public", "art"), { recursive: true });

const jobs = [
  ["p1.jpg", "sunset-wood"], ["p2.jpg", "swamp"], ["p3 color.jpg", "statue-color"], ["p3 b&w.jpg", "statue-lines"],
  ["p4.jpg", "triptych"], ["p5.jpg", "triptych-2"], ["p6.jpg", "grid-rooms"], ["logo.jpg", "logo"],
  ["1.jpg", "train", 232, 538, 886, 502],
  ["2.jpg", "giant", 234, 14, 884, 500],
  ["2.jpg", "wolf", 84, 538, 582, 500],
  ["2.jpg", "shadow-story", 696, 538, 582, 500],
  ["5.jpg", "forest", 234, 540, 882, 498],
  ["6.jpg", "bw-factory", 234, 14, 882, 500],
  ["6.jpg", "bw-machine", 234, 540, 882, 498],
  ["3.jpg", "mamdouh", 52, 90, 202, 250],
];

(async () => {
  for (const [file, name, x, y, w, h] of jobs) {
    const img = await Jimp.read(src(file));
    if (w) img.crop(x, y, w, h);
    await img.quality(88).writeAsync(out(name + ".jpg"));
    console.log("ok", name, img.bitmap.width + "x" + img.bitmap.height);
  }
  fs.copyFileSync(src("zhiyan_zhiyan-24.webp"), out("zahian-factory.webp"));
  fs.copyFileSync(src("zhiyan_zhiyan-36.webp"), out("zahian-characters.webp"));
  // OG image (1200x630) + favicon
  const og = await Jimp.read(src("p1.jpg"));
  og.cover(1200, 630);
  const logo = await Jimp.read(src("logo.jpg"));
  logo.resize(220, 220);
  og.composite(logo, 40, 370);
  await og.quality(88).writeAsync(path.join(root, "public", "og-image.jpg"));
  const ic = await Jimp.read(src("logo.jpg"));
  await ic.resize(256, 256).quality(90).writeAsync(path.join(root, "public", "icon.jpg"));
  console.log("done");
})();

