const calculateConfectionaryCosts = require('../calculate-confectionary-costs')

describe('calculateConfectionaryCosts', () => {
    test('returns an array with a new object with updated yearlyCumulativeSpend property', () => {
        const celeb = [
            {
              name: "Beyonce Bowls",
              yearlyCumulativeSpend: "£44",
              purchaseToday: {
                item: "White mice",
                costPerItem: "£3",
                amountBought: 17,
              }
            }]
            const celebOutcome = [
                { name: 'Beyonce Bowls', yearlyCumulativeSpend: '£95'} 
            ]
            const input = calculateConfectionaryCosts(celeb)
            expect(input).toEqual(celebOutcome)
    })
    test('returns an array of multiple objects with updates yearlyCumumlativeSpend property', () => {
        const celebs = [
            {
              name: "Beyonce Bowls",
              yearlyCumulativeSpend: "£44",
              purchaseToday: {
                item: "White mice",
                costPerItem: "£3",
                amountBought: 17,
              },
            },
            {
              name: "Kray-Z",
              yearlyCumulativeSpend: "£28",
              purchaseToday: {
                item: "Flying saucers",
                costPerItem: "£2",
                amountBought: 28,
              },
            },
            {
              name: "Matey Terry",
              yearlyCumulativeSpend: "£36",
              purchaseToday: {
                item: "Cola bottles",
                costPerItem: "£4",
                amountBought: 81,
              },
            },
            {
              name: "Justine Klimberbake",
              yearlyCumulativeSpend: "£30",
              purchaseToday: {
                item: "Giant jelly snakes",
                costPerItem: "£103",
                amountBought: 2,
              },
            },
          ];
          const celebsOutcome = [
            { name: 'Beyonce Bowls', yearlyCumulativeSpend: '£95' },
            { name: 'Kray-Z', yearlyCumulativeSpend: '£84' },
            { name: 'Matey Terry', yearlyCumulativeSpend: '£360' },
            { name: 'Justine Klimberbake', yearlyCumulativeSpend: '£236' }
        ];
        const input = calculateConfectionaryCosts(celebs);
        expect(input).toEqual(celebsOutcome)
    })
})