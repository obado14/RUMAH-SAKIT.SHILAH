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
  await page.goto('http://localhost:3006', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1500));

  // Capture header area
  await page.screenshot({ path: 'docs/design-references/hopkinsmedicine/header_new_logo.png', clip: { x: 0, y: 0, width: 1440, height: 180 } });
  
  // Scroll to footer and capture footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'docs/design-references/hopkinsmedicine/footer_new_logo.png' });

  console.log('Saved header_new_logo.png and footer_new_logo.png');
  await browser.close();
}

run();
