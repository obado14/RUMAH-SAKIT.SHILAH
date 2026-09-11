import puppeteer from 'puppeteer-core';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3007', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1500));

  await page.screenshot({
    path: 'docs/design-references/hopkinsmedicine/header_194x70.png',
    clip: { x: 0, y: 0, width: 1440, height: 180 }
  });

  const logoDim = await page.evaluate(() => {
    const img = document.querySelector('header img');
    if (!img) return null;
    const rect = img.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  });
  console.log('Rendered Header Logo Rect:', logoDim);

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: 'docs/design-references/hopkinsmedicine/footer_194x70.png'
  });

  const footerLogoDim = await page.evaluate(() => {
    const img = document.querySelector('footer img');
    if (!img) return null;
    const rect = img.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  });
  console.log('Rendered Footer Logo Rect:', footerLogoDim);

  await browser.close();
}

run();
