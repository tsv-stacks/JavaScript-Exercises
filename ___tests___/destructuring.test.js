const { name, quantity, price, one, two, three, four, five, six, johnName, johnAge, isJohnAdmin, steveName, steveAge, isSteveAdmin, firstName, lastName, age, firstName2, lastName2, lastStudent, student1, student2, student3, student4, student5 } = require('../destructuring.js')

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

describe('destructuring partial contents of array', () => {
    xit('destructuring array', () => {
        expect(firstName).toBe('Chris')
        expect(lastName).toBe('Owen')
        expect(age).toBe(12)
    })

    xit('skipping items when destructuring', () => {
        expect(firstName2).toBe('Chris')
        expect(lastName2).toBe('Owen')
    })
})

describe('Using Array Destructuring get the last name from the array.', () => {
    xit('check lastStudent variable has been set correctly', () => {
        expect(lastStudent).toBe('Alexandare')
    })
})

describe('Using Array Destructuring get all of the names from this Nested Array', () => {
    xit('check Student variables have been set correctly', () => {
        expect(student1).toBe('Jeff')
        expect(student2).toBe('Abed')
        expect(student3).toBe('Troy')
        expect(student4).toBe('Annie')
        expect(student5).toBe('Britta')
    })
})
