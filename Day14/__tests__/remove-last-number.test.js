const {removeLastNumber} = require('../remove-last-number');

describe('removeLastNumer', () => {
    test.skip('Return empty array if empty array is passed', () => {
        const actual = removeLastNumber([]);
        const expected = [];
        expect(actual).toEqual(expected);
      });
    test.skip('Return empty array if a single integer is passed', () => {
        const actual = removeLastNumber([1]);
        const expected = [];
        expect(actual).toEqual(expected);
    });
    test.skip('Return new array with last number removed, if the array contains more than 1 integers', () => {
        const actual = removeLastNumber([1, 2, 3, 4, 5]);
        const expected = [1, 2, 3, 4];
        expect(actual).toEqual(expected);
    });
    test.skip('Return new array', () => {
        const actual = [1, 2, 3, 4, 5];
        const expected = removeLastNumber(actual);
        expect(actual).not.toBe(expected);
    });
    test.skip('Does not mutate input array', () => {
        const actual = [1, 2, 3, 4, 5];
        const expected = removeLastNumber([1, 2, 3, 4, 5]);
        expect(actual).toEqual(expected);
    });

})