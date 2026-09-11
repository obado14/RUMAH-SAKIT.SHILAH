import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TARGET_URL = 'https://www.hopkinsmedicine.org/';

async function run() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: false,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled',
      '--window-size=1440,900'
    ],
    defaultViewport: {
      width: 1440,
      height: 900
    }
  });

  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36');

  console.log(`Navigating to ${TARGET_URL}...`);
  try {
    const res = await page.goto(TARGET_URL, { waitUntil: 'networkidle2', timeout: 35000 });
    console.log('Page title:', await page.title());
    console.log('Response status:', res ? res.status() : 'null');
    
    // Wait for page to settle
    await new Promise(r => setTimeout(r, 6000));
    console.log('Current URL:', page.url());
    console.log('Current Title:', await page.title());

    // Create directories
    fs.mkdirSync('docs/research/hopkinsmedicine', { recursive: true });
    fs.mkdirSync('docs/design-references/hopkinsmedicine', { recursive: true });

    // Take desktop screenshot
    await page.screenshot({ path: 'docs/design-references/hopkinsmedicine/desktop.png', fullPage: true });
    console.log('Saved desktop full-page screenshot');

    // Get HTML
    const html = await page.content();
    fs.writeFileSync('docs/research/hopkinsmedicine/page.html', html, 'utf-8');
    console.log('Saved page.html, size:', html.length);

    // Extract meta, colors, fonts, links, images
    const metadata = await page.evaluate(() => {
      const title = document.title;
      const metaTags = Array.from(document.querySelectorAll('meta')).map(m => ({
        name: m.getAttribute('name') || m.getAttribute('property'),
        content: m.getAttribute('content')
      })).filter(m => m.name && m.content);

      const images = Array.from(document.querySelectorAll('img')).map(img => ({
        src: img.src,
        alt: img.alt,
        width: img.naturalWidth || img.width,
        height: img.naturalHeight || img.height,
        className: img.className
      }));

      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4')).map(h => ({
        tag: h.tagName.toLowerCase(),
        text: h.textContent?.trim()
      }));

      const bodyStyle = window.getComputedStyle(document.body);
      const fonts = {
        fontFamily: bodyStyle.fontFamily,
        fontSize: bodyStyle.fontSize,
        color: bodyStyle.color,
        backgroundColor: bodyStyle.backgroundColor
      };

      return { title, metaTags, images, headings, fonts };
    });

    fs.writeFileSync('docs/research/hopkinsmedicine/metadata.json', JSON.stringify(metadata, null, 2), 'utf-8');
    console.log('Saved metadata.json');

  } catch (err) {
    console.error('Error during inspection:', err);
  } finally {
    await browser.close();
    console.log('Browser closed.');
  }
}

run();
