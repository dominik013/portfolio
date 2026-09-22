import { readFile, readdir, access } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import assert from 'node:assert/strict';

const root = resolve('dist');
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? walk(join(dir, entry.name)) : join(dir, entry.name)))).flat();
}
const files = await walk(root);
const htmlFiles = files.filter(file => file.endsWith('.html'));
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  for (const [, href] of html.matchAll(/href="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    if (href.startsWith('//')) continue;
    const pathname = decodeURIComponent(href);
    const target = join(root, pathname.endsWith('/') ? `${pathname}index.html` : pathname);
    await access(target).catch(() => { throw new Error(`Broken local link in ${file}: ${href}`); });
  }
}
const home = await readFile(join(root, 'index.html'), 'utf8');
assert.equal((home.match(/class="project-row"/g) || []).length, 6, 'Homepage should include all six curated public repositories.');
assert.ok(home.includes('10.3390') || home.includes('/papers/continuous-mobile-user-authentication/'), 'Homepage must link to the research.');
assert.ok(!files.some(file => file.includes('/notes/first-note/')), 'Draft notes must never be published.');
assert.ok(!(await readFile(join(root, 'sitemap.xml'), 'utf8')).includes('first-note'), 'Drafts must be excluded from sitemap.');
console.log(`Verified ${htmlFiles.length} pages: local links resolve, six projects are listed, and draft notes stay private.`);
