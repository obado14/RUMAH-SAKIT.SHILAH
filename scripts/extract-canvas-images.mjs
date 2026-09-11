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
  // Scroll down smoothly to trigger lazy-loading of all images!
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 150);
    });
  });

  await new Promise(r => setTimeout(r, 4000));

  const imgDir = 'public/sites/hopkinsmedicine/images';
  fs.mkdirSync(imgDir, { recursive: true });

  // Extract all img elements rendered pixels via canvas or direct svg outerHTML
  const extractedImages = await page.evaluate(() => {
    const results = [];
    const imgs = document.querySelectorAll('img');
    imgs.forEach((img, idx) => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width || 300;
        canvas.height = img.naturalHeight || img.height || 150;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const dataUrl = canvas.toDataURL('image/png');
        results.push({
          index: idx,
          src: img.src,
          dataUrl: dataUrl,
          width: canvas.width,
          height: canvas.height,
          alt: img.alt
        });
      } catch (e) {
        // Cross-origin tainted canvas or svg
        results.push({
          index: idx,
          src: img.src,
          error: e.message
        });
      }
    });

    // Also get all SVG code in the page
    const svgs = Array.from(document.querySelectorAll('svg')).map((s, idx) => ({
      index: idx,
      html: s.outerHTML,
      className: s.className.baseVal || s.className || ''
    }));

    return { results, svgs };
  });

  console.log(`Extracted ${extractedImages.results.length} images and ${extractedImages.svgs.length} svgs`);

  const urlMap = {};
  for (const item of extractedImages.results) {
    if (item.dataUrl && item.dataUrl.startsWith('data:image')) {
      const base64 = item.dataUrl.split(',')[1];
      let name = `img_${item.index}.png`;
      try {
        const u = new URL(item.src);
        name = `${item.index}_` + path.basename(u.pathname).replace(/[^a-zA-Z0-9_-]/g, '_') + '.png';
      } catch (_) {}
      const filePath = path.join(imgDir, name);
      fs.writeFileSync(filePath, Buffer.from(base64, 'base64'));
      urlMap[item.src] = `/sites/hopkinsmedicine/images/${name}`;
      console.log(`Saved canvas image: ${filePath} (${item.width}x${item.height})`);
    } else {
      console.log(`Item ${item.index} (${item.src}) had error or no dataUrl:`, item.error);
    }
  }

  // Save SVGs
  fs.writeFileSync('docs/research/hopkinsmedicine/svgs.json', JSON.stringify(extractedImages.svgs, null, 2), 'utf-8');

  // For any images that had cross-origin tainted canvas, navigate directly to them and grab data
  const failed = extractedImages.results.filter(r => !r.dataUrl);
  console.log(`Navigating directly to ${failed.length} images that could not be read via canvas...`);
  for (const f of failed) {
    try {
      console.log(`Fetching directly via page navigation: ${f.src}`);
      const imgPage = await browser.newPage();
      await imgPage.goto(f.src, { waitUntil: 'networkidle0' });
      await new Promise(r => setTimeout(r, 1000));
      const bufferBase64 = await imgPage.evaluate(async () => {
        const img = document.querySelector('img');
        if (img) {
          const canvas = document.createElement('canvas');
          canvas.width = img.naturalWidth || 400;
          canvas.height = img.naturalHeight || 300;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          return canvas.toDataURL('image/png');
        }
        return null;
      });
      await imgPage.close();

      if (bufferBase64 && bufferBase64.startsWith('data:image')) {
        const base64 = bufferBase64.split(',')[1];
        let name = `direct_${f.index}.png`;
        try {
          const u = new URL(f.src);
          name = `${f.index}_` + path.basename(u.pathname).replace(/[^a-zA-Z0-9_-]/g, '_') + '.png';
        } catch (_) {}
        const filePath = path.join(imgDir, name);
        fs.writeFileSync(filePath, Buffer.from(base64, 'base64'));
        urlMap[f.src] = `/sites/hopkinsmedicine/images/${name}`;
        console.log(`Successfully extracted direct: ${filePath}`);
      }
    } catch (e) {
      console.warn(`Failed direct grab for ${f.src}:`, e.message);
    }
  }

  fs.writeFileSync('docs/research/hopkinsmedicine/url-map.json', JSON.stringify(urlMap, null, 2), 'utf-8');
  await browser.close();
}

run();
