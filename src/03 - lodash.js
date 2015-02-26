var _ = require("lodash");
var doSomething = require("./doSomething.js");
var negate = function(x) { return -1 * x; };
var abs = function(x) { return Math.abs(x); };

//we've got _.curry!

//we've got _.compose!

//we don't have _.flip :(
//but we have _.partialRight :)


var negateAllLd = _.partialRight(_.map, _.compose(negate, abs));

//our test data
var numbers = [-1, 2, 0, -2, 3, 4, -6];

console.log(numbers);
console.log(doSomething(numbers));
console.log(negateAllLd(numbers));
