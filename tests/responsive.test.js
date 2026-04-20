const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('styles.css', 'utf8');
const js = fs.readFileSync('script.js', 'utf8');

assert(html.includes('width=device-width, initial-scale=1.0'), 'Viewport meta tag should be present for responsive rendering.');
assert(html.includes('aria-expanded="false"'), 'Navigation toggle should expose aria-expanded.');
assert(html.includes('aria-controls="primary-navigation"'), 'Navigation toggle should reference the controlled navigation element.');
assert(html.includes('<nav id="primary-navigation" class="site-nav">'), 'Primary navigation should have a stable id for accessibility.');

assert(css.includes('.site-nav {'), 'Site nav styles should exist.');
assert(css.includes('display: none;'), 'Mobile-first navigation should be hidden by default.');
assert(css.includes('@media (min-width: 640px)'), 'Small-tablet breakpoint should exist.');
assert(css.includes('@media (min-width: 768px)'), 'Tablet breakpoint should exist.');
assert(css.includes('@media (min-width: 960px)'), 'Desktop breakpoint should exist.');
assert(css.includes('.hero-actions {\n  display: flex;\n  flex-direction: column;'), 'Hero actions should stack vertically by default on mobile.');
assert(css.includes('.grid-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));'), 'Desktop grid should expand to four columns.');

assert(js.includes('toggle.setAttribute(\'aria-expanded\''), 'Navigation script should synchronize aria-expanded.');
assert(js.includes('window.addEventListener(\'resize\''), 'Navigation script should reset menu state on desktop resize.');
assert(js.includes('nav.querySelectorAll(\'a\')'), 'Navigation script should close menu after link activation.');

console.log('Responsive layout checks passed.');
