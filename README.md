# BluePeak Business Site

Static multi-page business website with a responsive, mobile-first layout.

## Responsive implementation notes

- Base styles now prioritize small screens first.
- Navigation uses an accessible mobile menu with `aria-expanded` and `aria-controls`.
- Grid-heavy sections progressively enhance at 640px, 768px, and 960px breakpoints.
- Buttons and layout spacing are optimized for touch targets on smaller devices.

## Automated verification

The repository includes lightweight automated checks in `tests/responsive.test.js` that verify:

- viewport meta usage
- accessible mobile navigation markup
- mobile-first CSS defaults
- progressive breakpoints for larger screens
- responsive navigation JavaScript behavior

Run the test file in Node:

```bash
node tests/responsive.test.js
```
