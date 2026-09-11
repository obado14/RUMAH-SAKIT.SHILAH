import puppeteer from 'puppeteer-core';
import fs from 'fs';

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
  await new Promise(r => setTimeout(r, 3000));

  // Find Menu button and click it
  try {
    const menuBtn = await page.$('button[aria-label*="Menu"], button[class*="menu"], [id*="menu"]');
    console.log('Menu button found:', !!menuBtn);
    if (menuBtn) {
      await menuBtn.click();
      await new Promise(r => setTimeout(r, 1500));
      await page.screenshot({ path: 'docs/design-references/hopkinsmedicine/menu_opened.png' });
      console.log('Saved menu_opened.png');
      
      const menuContent = await page.evaluate(() => {
        const drawer = document.querySelector('[class*="nav"], [class*="drawer"], [class*="menu"], [role="dialog"], [aria-expanded="true"]');
        return drawer ? drawer.outerHTML : 'Not found';
      });
      fs.writeFileSync('docs/research/hopkinsmedicine/menu.html', menuContent, 'utf-8');
      
      // Close menu
      await menuBtn.click();
      await new Promise(r => setTimeout(r, 1000));
    }
  } catch (e) {
    console.warn('Error clicking menu:', e.message);
  }

  // Find Search button and click it
  try {
    const searchBtn = await page.$('button[aria-label*="Search"], [class*="search"], [id*="search"]');
    console.log('Search button found:', !!searchBtn);
    if (searchBtn) {
      await searchBtn.click();
      await new Promise(r => setTimeout(r, 1500));
      await page.screenshot({ path: 'docs/design-references/hopkinsmedicine/search_opened.png' });
      console.log('Saved search_opened.png');
      
      const searchContent = await page.evaluate(() => {
        const searchModal = document.querySelector('[class*="search-modal"], [class*="searchBox"], [role="search"], input[type="search"]')?.closest('div, form');
        return searchModal ? searchModal.outerHTML : 'Not found';
      });
      fs.writeFileSync('docs/research/hopkinsmedicine/search.html', searchContent, 'utf-8');
    }
  } catch (e) {
    console.warn('Error clicking search:', e.message);
  }

  // Also take a mobile screenshot
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(TARGET_URL, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: 'docs/design-references/hopkinsmedicine/mobile.png', fullPage: true });
  console.log('Saved mobile.png');

  await browser.close();
}

run();
