/**
Exercise 1

Rewrite the code below to use array destructuring instead of assigning each value to a variable.

Note: this test will pass even if array destructuring has not been used.
*/

let item = ["Egg", 0.25, 12];

// Change below this line

let name = item[0];
let price = item[1];
let quantity = item[2];

// Change above this line

// ---------------------------------------------------------------------

/*
Exercise 2

Rewrite the code below to assign each number to the right variable.
*/

let numbers = [3, 5, 4, 2, 6, 1];


// Change below this line

let [one, two, three, four, five, six] = numbers;

// Change above this line

// ---------------------------------------------------------------------

/**
Exercise 3a

We have an object called 'john'.
Write the destructuring assignment that reads:
- 'name' property into the variable 'johnName'.
- 'years' property into the variable 'johnAge'.
- 'isAdmin' property into the variable 'isJohnAdmin'
*/

let john = { name: "John", years: 30, isAdmin: true };

// Change below this line

let johnName = john.name
let johnAge = john.years
let isJohnAdmin = john.isAdmin

// Change above this line


// Exercise 3b

// We have an object called 'steve'. Similiar as before
// 'name' property into the variable 'steveName'.
// - 'years' property into the variable 'steveAge'.
// - 'isAdmin' property into the variable 'isSteveAdmin' (false, if no such property)

let steve = { name: "Steve", years: 25 };

// Change below this line

let steveName = steve.name
let steveAge = steve.years
let isSteveAdmin = steve.isAdmin

// Change above this line

// ---------------------------------------------------------------------

module.exports = { name, quantity, price, one, two, three, four, five, six, johnName, johnAge, isJohnAdmin, steveName, steveAge, isSteveAdmin }
