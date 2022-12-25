const { name, quantity, price, one, two, three, four, five, six, johnName, johnAge, isJohnAdmin, steveName, steveAge, isSteveAdmin } = require('../destructuring.js')

describe('array destructuring instead of assigning each value to a variable', () => {
    it('check name price and quantity is set correctly', () => {
        expect(name).toBe('Egg')
        expect(price).toBe(0.25)
        expect(quantity).toBe(12)
    })
})

describe('assigning names to variables', () => {
    xit('check values have been correctly assigned', () => {
        expect(one).toBe(1)
        expect(two).toBe(2)
        expect(three).toBe(3)
        expect(four).toBe(4)
        expect(five).toBe(5)
        expect(six).toBe(6)
    })
})

describe('destructuring and default values', () => {
    xit('check values of destructuring john object', () => {
        expect(johnName).toBe('John')
        expect(johnAge).toBe(30)
        expect(isJohnAdmin).toBe(true)
    })

    xit('check default value from destructuring steve object', () => {
        expect(steveName).toBe('Steve')
        expect(steveAge).toBe(25)
        expect(isSteveAdmin).toBe(false)
    })
})
