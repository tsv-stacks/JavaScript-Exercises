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

/*
Exercise 2

Rewrite the code below to assign each number to the right variable.
*/

let numbers = [3, 5, 4, 2, 6, 1];


// Change below this line

let [one, two, three, four, five, six] = numbers;

// Change above this line

/**
Exercise 3

We have an object called 'user'.
Write the destructuring assignment that reads:
- 'name' property into the variable 'name'.
- 'years' property into the variable 'age'.
- 'isAdmin' property into the variable 'isAdmin' (false, if no such property)
*/




module.exports = { name, quantity, price, one, two, three, four, five, six }
