const { createRef } = require('../create-ref');

describe('createRef', () => {
    test('createRef is a function', () => {
        expect(typeof createRef).toBe('function');
    })
    test('returns object containing employee name with id property', () => {
        const newEmployee = createRef([{
            name: "Rose",
            id: "dS8rJns",
            secretFear: "spiders"
        }], 'name', 'id');
        expect(newEmployee).toEqual({
            Rose: "dS8rJns"
        })
    });
    test('returns object containing all employee names with id property', () => {
        const newEmployee = createRef([
            { name: "Rose", id: "dS8rJns", secretFear: "spiders" },
            { name: "Simon", id: "Pk34ABs", secretFear: "mice" },
            { name: "Jim", id: "lk1ff8s", secretFear: "bears" },
            { name: "David", id: "og8r0nV", secretFear: "Rose" },
        ], 'name', 'id');
        expect(newEmployee).toEqual({
            Rose: "dS8rJns",
            Simon: "Pk34ABs",
            Jim: "lk1ff8s",
            David: "og8r0nV"
        })
    })
    test('returns object containing all employee names with secret fear property', () => {
        const newEmployee = createRef([
            { name: "Rose", id: "dS8rJns", secretFear: "spiders" },
            { name: "Simon", id: "Pk34ABs", secretFear: "mice" },
            { name: "Jim", id: "lk1ff8s", secretFear: "bears" },
            { name: "David", id: "og8r0nV", secretFear: "Rose" },
        ], 'name', 'secretFear');
        expect(newEmployee).toEqual({
            Rose: "spiders",
            Simon: "mice",
            Jim: "bears",
            David: "Rose"
        })
    })
    test('returns object containing all employee secret fears with id property', () => {
        const newEmployee = createRef([
            { name: "Rose", id: "dS8rJns", secretFear: "spiders" },
            { name: "Simon", id: "Pk34ABs", secretFear: "mice" },
            { name: "Jim", id: "lk1ff8s", secretFear: "bears" },
            { name: "David", id: "og8r0nV", secretFear: "Rose" },
        ], 'secretFear', 'id');
        expect(newEmployee).toEqual({
            spiders: "dS8rJns",
            mice: "Pk34ABs",
            bears: "lk1ff8s",
            Rose: "og8r0nV"
        })
    })
    describe('testing for object mutation', () => {
        test('function returns new object with own reference in memory', () => {
            const input = [{ name: "Rose", id: "dS8rJns", secretFear: "spiders" }];

            createRef(input, 'name', 'id');
            expect(input).toEqual(
               [{ name: "Rose", id: "dS8rJns", secretFear: "spiders" }]
            );
        })
    })
})

