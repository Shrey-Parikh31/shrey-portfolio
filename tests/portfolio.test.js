import test from 'node:test';
import assert from 'node:assert/strict';
import { themes } from '../src/data/themes.js';
import { scoreTyping } from '../src/components/typing.js';

function luminance(hex) {
  const linear = hex.slice(1).match(/../g).map((channel) => {
    const value = parseInt(channel, 16) / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722;
}

for (const theme of themes) {
  test(`${theme.name}: readable text, links, and errors on both surfaces`, () => {
    for (const background of ['bg', 'bgElevated']) {
      for (const foreground of ['text', 'sub', 'main', 'error']) {
        const pair = [luminance(theme.colors[foreground]), luminance(theme.colors[background])].sort((a, b) => b - a);
        const contrast = (pair[0] + 0.05) / (pair[1] + 0.05);
        assert.ok(contrast >= 4.5, `${foreground} on ${background}: ${contrast.toFixed(2)}:1`);
      }
    }
  });
}

test('typing scores use correct characters and elapsed minutes', () => {
  assert.deepEqual(scoreTyping('hello world', 'hello world', 6000), { accuracy: 100, wpm: 22 });
  assert.deepEqual(scoreTyping('hello', 'hxlxo', 60000), { accuracy: 60, wpm: 1 });
});

test('sub-second rounds report accuracy without a misleading speed', () => {
  assert.deepEqual(scoreTyping('hello', '', 0), { accuracy: 100, wpm: null });
  assert.deepEqual(scoreTyping('hello', 'hello', 0), { accuracy: 100, wpm: null });
  assert.equal(scoreTyping('hello', 'hello', -10).wpm, null);
  assert.equal(scoreTyping('hello', 'hello', 999).wpm, null);
  assert.equal(scoreTyping('hello', 'hello', 1000).wpm, 60);
});
