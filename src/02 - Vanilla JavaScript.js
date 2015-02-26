// code adapted from http://dailyjs.com/2012/09/14/functional-programming/

var doSomething = require("./doSomething.js");

// Now let's do the same "Something" in one line
// using a functional approach with vanilla JS

//First we will need a few helper functions
var map = function(arr, f) { return arr.map(f); };

var flip = function(f) {
    return function(a, b) {
        return f.call(this, b, a);
    };
};
//var div = function(x, y) { return x / y; };
//console.log(div(1,2)); // prints 0.5
//console.log(flip(div)(1,2)); // prints 2

var curry = function(f) {
    return function(a) {
        return function(b) {
            return f(a, b);
        };
    };
};
//var add = function(x, y) { return x + y; };
//var addTo3 = curry(add)(3); //returns another function
//console.log(addTo3(4)); //prints 7

var negate = function(x) { return -1 * x; };
var abs = function(x) { return Math.abs(x); };

var compose = function(f, g){
    return function(a){
        return f(g(a));
    };
};
//var greet = function(s) { return 'Ciao ' + s; };
//var exclaim = function(s) { return s + '!'; };
//var excited_greeting = compose(greet, exclaim); //creates a new function
//console.log(excited_greeting('Milan')); //prints "Ciao Milan!"


var negateAllFunc = curry(flip(map)) (compose(negate, abs));


//our test data
var numbers = [-1, 2, 0, -2, 3, 4, -6];

console.log(numbers);
console.log(doSomething(numbers));
console.log(negateAllFunc(numbers));
