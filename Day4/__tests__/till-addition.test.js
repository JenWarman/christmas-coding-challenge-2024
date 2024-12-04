const tillAddition = require("../till-addition");

describe('tillAddition', () => {
    test('Returns 0 if passed an empty object', () => {
        expect(tillAddition({})).toBe("0")
    })
    test('Returns the total money formatted as a string', () => {
        expect(tillAddition({ "1p": 1, "2p": 1 })).toBe("£0.03")
    })
    test('Returns the total money formatted as a string', () => {
        expect(tillAddition({ "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1 })).toBe("£0.38")
    })
    test('Returns the total money formatted as a string', () => {
        expect(tillAddition({ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 })).toBe("£1.85")
    })
})