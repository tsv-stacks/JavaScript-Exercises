
const { name, quantity, price } = require('../destructuring.js')

describe('array destructuring instead of assigning each value to a variable', () => {
    it('check name price and quantity is set correctly', () => {
        expect(name).toBe('Egg')
        expect(price).toBe(0.25)
        expect(quantity).toBe(12)
    })
})
