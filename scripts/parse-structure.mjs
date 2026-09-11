import fs from 'fs';

const html = fs.readFileSync('docs/research/hopkinsmedicine/page.html', 'utf-8');

// Find navigation / menu links
const links = [];
const linkRegex = /<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;
let match;
while ((match = linkRegex.exec(html)) !== null) {
  const href = match[1];
  const text = match[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text && text.length < 80) {
    links.push({ href, text });
  }
}

// Group links by section or uniqueness
const uniqueLinks = [];
const seen = new Set();
for (const l of links) {
  const key = `${l.text}|${l.href}`;
  if (!seen.has(key)) {
    seen.add(key);
    uniqueLinks.push(l);
  }
}

// Find all CSS stylesheet URLs in HTML
const cssLinks = [];
const cssRegex = /<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']*)["']/gi;
while ((match = cssRegex.exec(html)) !== null) {
  cssLinks.push(match[1]);
}

const structure = {
  totalLinks: uniqueLinks.length,
  links: uniqueLinks,
  stylesheets: cssLinks
};

fs.writeFileSync('docs/research/hopkinsmedicine/site-structure.json', JSON.stringify(structure, null, 2), 'utf-8');
console.log('Saved site-structure.json, unique links count:', uniqueLinks.length);
console.log('Stylesheets count:', cssLinks.length);
