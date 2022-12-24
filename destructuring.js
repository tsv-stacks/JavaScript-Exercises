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

module.exports = { name, quantity, price }
