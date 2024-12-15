const raiseSalaries = require('../raise-salaries')


describe("raiseSalaries", () => {
    test('Return empty array if passed an empty array', () => {
        const actual = raiseSalaries([],0);
        const expected = [];
        expect(raiseSalaries(actual)).toEqual(expected);
      });
    test('Return new array of Employee with salary increased by percentage(num)', () => {
        const actual = [{name: "Alice", salary: 3000}];
        const expected = ([{name: "Alice", salary: 3300}]);
        expect(raiseSalaries(actual, 10)).toEqual(expected);
        });
    test('return new array of employees with salary increase', () => {
        const actual = [
        { name: "Alice", salary: 3000 },
        { name: "Bob", salary: 2000 },
        { name: "Vel", salary: 4500 },
      ];
      const expected = [
        { name: 'Alice', salary: 3300 },
        { name: 'Bob', salary: 2200 }, 
        { name: 'Vel', salary: 4950 }
      ];
      expect(raiseSalaries(actual, 10)).toEqual(expected);
    })
    })