import puppeteer from 'puppeteer-core';
import fs from 'fs';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  const buf = fs.readFileSync('public/sites/hopkinsmedicine/images/custom_logo.jpeg');
  const base64 = buf.toString('base64');
  
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <body>
        <img id="logo" src="data:image/jpeg;base64,${base64}" />
        <canvas id="cvs"></canvas>
      </body>
    </html>
  `);

  const result = await page.evaluate(() => {
    const img = document.getElementById('logo');
    const width = img.naturalWidth;
    const height = img.naturalHeight;

    const cvs = document.getElementById('cvs');
    cvs.width = width;
    cvs.height = height;
    const ctx = cvs.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const imgData = ctx.getImageData(0, 0, width, height);
    const data = imgData.data;

    // Sample top-left corner background color
    const bgR = data[0];
    const bgG = data[1];
    const bgB = data[2];

    // Transparent version: pixels that are close to the background blue become transparent
    const transCvs = document.createElement('canvas');
    transCvs.width = width;
    transCvs.height = height;
    const transCtx = transCvs.getContext('2d');
    const transImgData = transCtx.createImageData(width, height);
    const transData = transImgData.data;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];

      // Distance from background blue
      const dist = Math.sqrt(
        Math.pow(r - bgR, 2) + Math.pow(g - bgG, 2) + Math.pow(b - bgB, 2)
      );

      // If it's the white text/graphics (high lightness or far from bg)
      if (dist < 40) {
        transData[i] = 0;
        transData[i + 1] = 0;
        transData[i + 2] = 0;
        transData[i + 3] = 0; // Transparent
      } else if (dist < 70) {
        // Smooth anti-aliased edge
        const alpha = (dist - 40) / 30;
        transData[i] = 255;
        transData[i + 1] = 255;
        transData[i + 2] = 255;
        transData[i + 3] = Math.round(alpha * 255);
      } else {
        // Foreground white
        transData[i] = 255;
        transData[i + 1] = 255;
        transData[i + 2] = 255;
        transData[i + 3] = 255;
      }
    }

    transCtx.putImageData(transImgData, 0, 0);
    const transBase64 = transCvs.toDataURL('image/png');

    return {
      width,
      height,
      bg: { r: bgR, g: bgG, b: bgB },
      transBase64
    };
  });

  console.log('Dimensions:', result.width, 'x', result.height);
  console.log('Background RGB:', result.bg);

  const pngBase64 = result.transBase64.split(',')[1];
  fs.writeFileSync('public/sites/hopkinsmedicine/images/shilah_logo_transparent.png', Buffer.from(pngBase64, 'base64'));
  console.log('Saved shilah_logo_transparent.png');

  await browser.close();
}

run();
