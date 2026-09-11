import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TARGET_URL = 'https://www.hopkinsmedicine.org/';

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    if (!url || !url.startsWith('http')) {
      return resolve(null);
    }
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36'
      }
    }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        return resolve(null);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(dest);
      });
    });
    req.on('error', err => {
      file.close();
      fs.unlink(dest, () => {});
      resolve(null);
    });
    req.setTimeout(15000, () => {
      req.abort();
      file.close();
      fs.unlink(dest, () => {});
      resolve(null);
    });
  });
}

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

  // Extract detailed computed styles, colors, typography, and section breakdown
  const details = await page.evaluate(() => {
    function getStyles(el) {
      if (!el) return null;
      const s = window.getComputedStyle(el);
      return {
        fontFamily: s.fontFamily,
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        lineHeight: s.lineHeight,
        color: s.color,
        backgroundColor: s.backgroundColor,
        padding: s.padding,
        margin: s.margin,
        border: s.border,
        borderRadius: s.borderRadius,
        boxShadow: s.boxShadow
      };
    }

    const header = document.querySelector('header, .header, nav');
    const hero = document.querySelector('.hero, [class*="hero"], h1')?.closest('section, div');
    const allH2 = Array.from(document.querySelectorAll('h2')).map(h => ({
      text: h.textContent.trim(),
      style: getStyles(h)
    }));

    // Collect all links in navigation
    const navLinks = Array.from(document.querySelectorAll('header a, nav a')).map(a => ({
      text: a.textContent.trim(),
      href: a.href,
      className: a.className
    }));

    // Collect all images
    const allImages = Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.currentSrc || img.src,
      alt: img.alt,
      width: img.naturalWidth || img.width,
      height: img.naturalHeight || img.height,
      className: img.className
    }));

    // Collect all SVG elements
    const allSvgs = Array.from(document.querySelectorAll('svg')).map(svg => ({
      outerHTML: svg.outerHTML,
      className: svg.getAttribute('class'),
      viewBox: svg.getAttribute('viewBox')
    }));

    // Background images
    const bgImages = [];
    document.querySelectorAll('*').forEach(el => {
      const bg = window.getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none' && bg.startsWith('url(')) {
        const match = bg.match(/url\(["']?([^"')]+)["']?\)/);
        if (match && match[1]) {
          bgImages.push({
            url: match[1],
            tagName: el.tagName,
            className: el.className
          });
        }
      }
    });

    return {
      title: document.title,
      navLinks,
      allH2,
      allImages,
      allSvgs: allSvgs.slice(0, 30),
      bgImages,
      bodyStyles: getStyles(document.body)
    };
  });

  fs.writeFileSync('docs/research/hopkinsmedicine/detailed-spec.json', JSON.stringify(details, null, 2), 'utf-8');
  console.log('Saved detailed-spec.json');

  // Prepare images directory
  const imgDir = 'public/sites/hopkinsmedicine/images';
  fs.mkdirSync(imgDir, { recursive: true });

  const urlToLocal = {};
  let count = 0;

  // Download all images
  const uniqueUrls = Array.from(new Set([
    ...details.allImages.map(i => i.src),
    ...details.bgImages.map(b => b.url)
  ])).filter(u => u && u.startsWith('http'));

  console.log(`Found ${uniqueUrls.length} unique images to download...`);

  for (const url of uniqueUrls) {
    try {
      const ext = path.extname(new URL(url).pathname) || '.png';
      const cleanExt = ext.split('?')[0] || '.png';
      const filename = `img_${count++}_${path.basename(new URL(url).pathname, cleanExt).slice(0, 20)}${cleanExt}`;
      const localPath = path.join(imgDir, filename);
      const res = await downloadFile(url, localPath);
      if (res) {
        urlToLocal[url] = `/sites/hopkinsmedicine/images/${filename}`;
        console.log(`Downloaded: ${url} -> ${urlToLocal[url]}`);
      }
    } catch (e) {
      console.warn('Failed to download:', url, e.message);
    }
  }

  fs.writeFileSync('docs/research/hopkinsmedicine/url-map.json', JSON.stringify(urlToLocal, null, 2), 'utf-8');
  console.log('Finished downloading assets.');

  await browser.close();
}

run();
