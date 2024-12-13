const {
    findMostRepeated,
  } = require('../katas/findMostRepeated/findMostRepeated');
  
  describe('findMostRepeated()', () => {
    test('returns an object when passed an array', () => {
      const array = [];
      const returnObject = {
        elements: [],
        repeats: null
      }
      expect(findMostRepeated(array)).toEqual(returnObject);
    });
    test(`returns object with properties containing the 
    most repeated value and the number of times that value 
    appeared in the input array`, () => {
      const array = ['foo', 'foo', 'bar', 'hello', 'world'];
      const returnObject = {
        elements: ['foo'],
        repeats: 2
      }
      expect(findMostRepeated(array)).toEqual(returnObject);
    })
    test('returns object with elements and repeats properties when there are no repeated values', () => {
      const array = ['foo', 'bar', 'hello', 'world'];
      const returnObject = {
        elements: [],
        repeats: null
      }
      expect(findMostRepeated(array)).toEqual(returnObject);
    })
    test('initial array is not mutated', () => {
      const array = ['foo', 'foo', 'bar', 'hello', 'world'];
      const output = findMostRepeated(array);
      expect(array).toEqual(['foo', 'foo', 'bar', 'hello', 'world']);
    })
  });