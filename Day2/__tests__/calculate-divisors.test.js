const calculateDivisors = require('../calculate-divisors');

describe('calculateDivisors', () => {
    test('Return 0 if passed 0', () => {
        const input = 0;
        const expected = 0;
        expect(calculateDivisors(input)).toBe(expected); 
    })
    test('Return 3 for input of 5', () => {
        expect(calculateDivisors(5)).toBe(3); 
    })
    test('Return 8 for input of 6', () => {
        expect(calculateDivisors(6)).toBe(8); 
    })
    test('Return 23 for input of 10', () => {
        expect(calculateDivisors(10)).toBe(23); 
    })
    test('Return 33 for input of 12', () => {
        expect(calculateDivisors(12)).toBe(33); 
    })
})