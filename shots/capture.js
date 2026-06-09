// Screenshot pass: 1 browser reused, sequential pages (Mac rule), fold + fullpage.
const path = require('path');
const fs = require('fs');
const { chromium } = require(path.join(process.env.HOME, 'content-machine', 'node_modules', 'playwright'));

const ROOT = path.join(process.env.HOME, 'Developer', 'style-gallery');
const OUT = path.join(ROOT, 'shots');

(async () => {
  const slugs = fs.readdirSync(path.join(ROOT, 'demos'))
    .filter(f => f.endsWith('.html'))
    .map(f => f.replace('.html', ''))
    .sort();
  const only = process.argv.slice(2);
  const targets = only.length ? slugs.filter(s => only.includes(s)) : slugs;

  let browser;
  try {
    browser = await chromium.launch();
  } catch {
    browser = await chromium.launch({ channel: 'chrome' });
  }
  const ctx = await browser.newContext({ viewport: { width: 1400, height: 1500 }, deviceScaleFactor: 0.5 });
  const page = await ctx.newPage();
  const errors = {};
  page.on('pageerror', e => { (errors.cur = errors.cur || []).push(String(e).slice(0, 200)); });

  for (const slug of targets) {
    errors.cur = [];
    await page.goto('file://' + path.join(ROOT, 'demos', slug + '.html'), { waitUntil: 'load' });
    await page.waitForTimeout(2600); // load reveal completes
    await page.screenshot({ path: path.join(OUT, slug + '-fold.png') });
    await page.screenshot({ path: path.join(OUT, slug + '-full.png'), fullPage: true });
    const h = await page.evaluate(() => document.documentElement.scrollHeight);
    console.log(slug, 'h=' + h, errors.cur.length ? 'JS_ERRORS: ' + errors.cur.join(' | ') : 'ok');
  }
  await browser.close();
})();
