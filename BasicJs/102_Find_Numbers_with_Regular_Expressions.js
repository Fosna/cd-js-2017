﻿// Skip 

// Setup
var testString = "There are 3 cats but 4 dogs.";

// Only change code below this line.

var expression = /.+/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var digitCount = testString.match(expression).length;
