import fs from 'node:fs';
import process from 'node:process';

let n = Number(process.argv[2] ?? 50000);
fs.mkdirSync('src', { recursive: true });
fs.writeFileSync(
  `src/test.ts`,
  `import { h } from 'snabbdom';\n` +
    Array.from(
      { length: n },
      (_, x) => `export const test${x} = () => h('div', { style: { color: 'red' } });`,
    ).join('\n'),
);
