const cloneObject = require('../clone-object')

describe('cloneObject', () => {
  test('should mutate the target object by copying properties from the source object', () => {
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };
    const result = cloneObject(target, source);
    expect(result).toEqual({ a: 1, b: 3, c: 4 });
    expect(target).toBe(result);
  });
  test('should not mutate the source object', () => {
    const target = { a: 1 };
    const source = { b: 2, c: 3 };
    cloneObject(target, source);
    expect(source).toEqual({ b: 2, c: 3 });
  });
  test('should handle an empty source object', () => {
    const target = { a: 1, b: 2 };
    const source = {};
    const result = cloneObject(target, source);
    expect(result).toEqual(target);
  });
  test('should handle an empty target object', () => {
    const target = {};
    const source = { a: 1, b: 2 };
    const result = cloneObject(target, source);
    expect(result).toEqual(source);
  });
});
