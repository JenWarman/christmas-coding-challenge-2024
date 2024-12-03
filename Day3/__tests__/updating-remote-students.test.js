const updateRemoteStudents = require("../update-remote-students");

describe('updateRemoteStudents', () => {
    test('Return new array with location included', () => {
        const input = [{ name: 'Euler', age: 27 }];
        const expected = [{ name: 'Euler', age: 27, location: 'remote' }];
        expect(updateRemoteStudents(input)).toEqual(expected); 
    })
    test('Return new array with location included for multple objects', () => {
        const input = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
          ]
        const expected = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location: 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' }
          ];
        expect(updateRemoteStudents(input)).toEqual(expected); 
    })
})