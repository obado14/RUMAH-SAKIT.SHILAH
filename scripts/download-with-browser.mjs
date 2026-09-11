import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TARGET_URL = 'https://www.hopkinsmedicine.org/';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(TARGET_URL, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 4000));

  const imgDir = 'public/sites/hopkinsmedicine/images';
  fs.mkdirSync(imgDir, { recursive: true });

  const metadata = JSON.parse(fs.readFileSync('docs/research/hopkinsmedicine/metadata.json', 'utf-8'));
  const images = metadata.images || [];

  const urlMap = {};

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    if (!img.src || !img.src.startsWith('http')) continue;
    console.log(`Downloading image ${i + 1}/${images.length}: ${img.src}`);
    try {
      const base64Data = await page.evaluate(async (src) => {
        try {
          const res = await fetch(src, { credentials: 'include' });
          const blob = await res.blob();
          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
          });
        } catch (e) {
          return null;
        }
      }, img.src);

      if (base64Data && base64Data.includes(',')) {
        const matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        if (matches && matches.length === 3) {
          const mimeType = matches[1];
          let ext = '.png';
          if (mimeType.includes('jpeg') || mimeType.includes('jpg')) ext = '.jpg';
          else if (mimeType.includes('svg')) ext = '.svg';
          else if (mimeType.includes('webp')) ext = '.webp';

          let baseName = 'img';
          try {
            const u = new URL(img.src);
            baseName = path.basename(u.pathname).replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 30);
          } catch (_) {}

          const filename = `${i}_${baseName}${ext}`;
          const filePath = path.join(imgDir, filename);
          fs.writeFileSync(filePath, Buffer.from(matches[2], 'base64'));
          urlMap[img.src] = `/sites/hopkinsmedicine/images/${filename}`;
          console.log(`Saved: ${filePath}`);
        }
      } else {
        console.warn(`Could not get base64 for ${img.src}`);
      }
    } catch (err) {
      console.error(`Error downloading ${img.src}:`, err.message);
    }
  }

  // Also extract hero background image if any
  const heroBg = await page.evaluate(() => {
    const heroEl = document.querySelector('.hero, [class*="hero"], [style*="background"]');
    if (heroEl) {
      const s = window.getComputedStyle(heroEl);
      return s.backgroundImage;
    }
    return null;
  });
  console.log('Hero bg:', heroBg);

  fs.writeFileSync('docs/research/hopkinsmedicine/url-map.json', JSON.stringify(urlMap, null, 2), 'utf-8');
  console.log('Done downloading images.');
  await browser.close();
}

run();
