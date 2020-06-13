const sum = require('./sum');

test('adds 2 + 2 NOT to equal 4', () => {
  expect(sum(2, 2)).not.toBe(5);
});

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});
