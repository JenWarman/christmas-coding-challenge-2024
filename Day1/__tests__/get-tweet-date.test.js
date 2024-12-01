const getTweetData = require('../get-tweet-data.js');

describe('getTweetData', () => {
    test('return empty object if passed empty string', () => {
        const input = '';
        const expected = {};
        expect(getTweetData(input)).toEqual(expected); 
    })
    test('return length of string', () => {
        const input = 'My awesome tweet';
        const expected = {
            tags: [],
            mentions: [], 
            tagCount: 0, 
            mentionCount: 0, 
            length: 'My awesome tweet'.length
          };
        expect(getTweetData(input)).toEqual(expected); 
    })
    test("Filter string for @, push to mentions array and increase mentionCount", () => {
        const input = "My awesome tweet to @northcoders";
        const expected = {
            tags: [],
            mentions: ["@northcoders"], 
            tagCount: 0, 
            mentionCount: 1, 
            length: "My awesome tweet to @northcoders".length
          };
        expect(getTweetData(input)).toEqual(expected); 
    })
     test("Filter string for #, push to tags array and increase tagCount", () => {
        const input = "My awesome tweet about #coding";
        const expected = {
            tags: ["#coding"],
            mentions: [], 
            tagCount: 1, 
            mentionCount: 0, 
            length: "My awesome tweet about #coding".length,
          };
        expect(getTweetData(input)).toEqual(expected); 
    })
});