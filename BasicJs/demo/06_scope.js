function myFavoriteColor() {
    var color = "Lime";
    console.log(color);
}

// 1 demonstrate working scenario
myFavoriteColor();

// 2 try to access variable when it's out of scope
console.log(color);

// 3 declare color as global variable


// Global vs local - local variable wins.
var color = "Gray";

function myFavoriteColor() {
    var color = "Lime";
    console.log(color);
}

console.log(color);


// Global vs local - global value is changed from function
var color = "Gray";

function myFavoriteColor() {
    color = "Lime";
    console.log(color);
}

console.log(color);


// Exercises up to and including 054_Stand_in_Line.js