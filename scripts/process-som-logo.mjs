import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function processSomLogo() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  const inputPath = 'C:\\Users\\USer\\Downloads\\ChatGPT Image Sep 12, 2026, 10_56_26 AM.png';
  const buf = fs.readFileSync(inputPath);
  const base64 = buf.toString('base64');

  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <body style="margin: 0; padding: 0;">
        <img id="logo" src="data:image/png;base64,${base64}" />
        <canvas id="cvs"></canvas>
      </body>
    </html>
  `);

  const resultBase64 = await page.evaluate(() => {
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

    // We will do a flood fill (BFS) starting from all boundary pixels.
    // A pixel is considered background if its R, G, B are all > 235 (near white).
    const visited = new Uint8Array(width * height);
    const queue = [];

    function isWhite(x, y) {
      const idx = (y * width + x) * 4;
      return data[idx] > 235 && data[idx + 1] > 235 && data[idx + 2] > 235;
    }

    // Add all 4 borders to the queue
    for (let x = 0; x < width; x++) {
      if (isWhite(x, 0)) {
        queue.push(x, 0);
        visited[0 * width + x] = 1;
      }
      if (isWhite(x, height - 1)) {
        queue.push(x, height - 1);
        visited[(height - 1) * width + x] = 1;
      }
    }

    for (let y = 0; y < height; y++) {
      if (isWhite(0, y) && !visited[y * width + 0]) {
        queue.push(0, y);
        visited[y * width + 0] = 1;
      }
      if (isWhite(width - 1, y) && !visited[y * width + (width - 1)]) {
        queue.push(width - 1, y);
        visited[y * width + (width - 1)] = 1;
      }
    }

    // BFS
    let head = 0;
    while (head < queue.length) {
      const cx = queue[head++];
      const cy = queue[head++];

      // 4-neighborhood
      const neighbors = [
        [cx - 1, cy],
        [cx + 1, cy],
        [cx, cy - 1],
        [cx, cy + 1]
      ];

      for (let i = 0; i < 4; i++) {
        const nx = neighbors[i][0];
        const ny = neighbors[i][1];
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const nIdx = ny * width + nx;
          if (!visited[nIdx] && isWhite(nx, ny)) {
            visited[nIdx] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }

    // Now turn all visited pixels transparent
    // And for boundary pixels (anti-aliasing), calculate alpha based on lightness
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const pIdx = y * width + x;
        const dIdx = pIdx * 4;
        if (visited[pIdx] === 1) {
          data[dIdx + 3] = 0; // completely transparent
        }
      }
    }

    // Second pass: soft anti-aliasing for pixels adjacent to transparent pixels
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const pIdx = y * width + x;
        const dIdx = pIdx * 4;
        if (visited[pIdx] === 0) {
          // Check if adjacent to visited
          const hasTransNeighbor =
            visited[(y - 1) * width + x] === 1 ||
            visited[(y + 1) * width + x] === 1 ||
            visited[y * width + (x - 1)] === 1 ||
            visited[y * width + (x + 1)] === 1;

          if (hasTransNeighbor) {
            // If near white, fade alpha proportionally
            const r = data[dIdx];
            const g = data[dIdx + 1];
            const b = data[dIdx + 2];
            const lightness = (r + g + b) / 3;
            if (lightness > 200) {
              const alphaRatio = (255 - lightness) / 55; // 255 -> 0, 200 -> 1
              data[dIdx + 3] = Math.max(0, Math.min(255, Math.round(alphaRatio * 255)));
            }
          }
        }
      }
    }

    ctx.putImageData(imgData, 0, 0);

    // Auto-crop transparent borders so logo scales nicely
    let minX = width, minY = height, maxX = 0, maxY = 0;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const a = data[(y * width + x) * 4 + 3];
        if (a > 10) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }

    const padding = 20;
    minX = Math.max(0, minX - padding);
    minY = Math.max(0, minY - padding);
    maxX = Math.min(width - 1, maxX + padding);
    maxY = Math.min(height - 1, maxY + padding);

    const cropW = maxX - minX;
    const cropH = maxY - minY;

    const cropCvs = document.createElement('canvas');
    cropCvs.width = cropW;
    cropCvs.height = cropH;
    const cropCtx = cropCvs.getContext('2d');
    cropCtx.drawImage(cvs, minX, minY, cropW, cropH, 0, 0, cropW, cropH);

    return cropCvs.toDataURL('image/png');
  });

  await browser.close();

  const base64Data = resultBase64.replace(/^data:image\/png;base64,/, '');
  const outPath1 = 'public/sites/hopkinsmedicine/images/shilah_som_logo.png';
  const outPath2 = 'public/sites/hopkinsmedicine/images/13_som-logo_png.png';
  fs.writeFileSync(outPath1, Buffer.from(base64Data, 'base64'));
  fs.writeFileSync(outPath2, Buffer.from(base64Data, 'base64'));
  console.log('Successfully generated transparent cropped logo at:', outPath1, 'and', outPath2);
}

processSomLogo().catch(console.error);
