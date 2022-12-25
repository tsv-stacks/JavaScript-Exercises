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

/**
Exercise 4a

Rewrite the code below to use array destructuring instead of assigning each value to a variable.
*/

let person = [12, "Chris", "Owen"];

// Change below this line

let firstName = person[1];
let lastName = person[2];
let age = person[0];

// Change above this line

/**
Exercise 4b

Rewrite the code below to use array destructuring instead of assigning each value to a variable.

Make sure not to have unused variables.

*/

let person2 = ["Chris", 12, "Owen"];

// Change below this line

let firstName2 = person2[0];
let lastName2 = person2[2];

// Change above this line

// ---------------------------------------------------------------------

/*
Exercise 5

Use Array Destructuring get the last name from the array.

*/

const students = ['Christina', 'Jon', 'Alexandare'];

// Change below this line

const lastStudent = ""

// Change above this line


// ---------------------------------------------------------------------

/**
Exercise 6

Using Array Destructuring get all of the names from this Nested Array

*/

const moreStudents = [
    'Jeff',
    ['Abed', 'Troy'],
    ['Annie', 'Britta']
];

// Change below this line

let student1 = "" // Jeff
let student2 = "" // Abed
let student3 = "" // Troy
let student4 = "" // Annie
let student5 = "" // Britta

// Change above this line

// ---------------------------------------------------------------------

// DO NOT CHANGE CODE BELOW THIS LINE

module.exports = { name, quantity, price, one, two, three, four, five, six, johnName, johnAge, isJohnAdmin, steveName, steveAge, isSteveAdmin, firstName, lastName, age, firstName2, lastName2, lastStudent, student1, student2, student3, student4, student5 }
