module.exports = {
  '*.{ts,tsx}': [() => 'tsc --skipLibCheck --noEmit', 'npm run lint'],
  '*.{js,mjs}': ['npm run lint'],
};
