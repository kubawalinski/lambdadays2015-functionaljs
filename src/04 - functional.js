var fjs = require("functional.js");
var doSomething = require("./doSomething.js");
var negate = function(x) { return -1 * x; };
var abs = function(y) { return Math.abs(y); };

// we've got curry!

//var add = function(x,y){return x+y;};
//var curriedAdd = fjs.curry(add); //creates a new function
//var addTo2 = curriedAdd(2); //creates another function
//console.log(addTo2(5)); // prints 7

// better yet, map is curried by default!
// and we don't need flip because
// the arguments are in correct order

//we've got compose!
//remember about the argument order...

//var alwaysNegativeIncorrect = fjs.compose(abs, negate);
//console.log(alwaysNegativeIncorrect(1)); //prints 1
//console.log(alwaysNegativeIncorrect(-1)); //prints 1


var negateAllFjs = fjs.map(fjs.compose(negate, abs));

//our test data
var numbers = [-1, 2, 0, -2, 3, 4, -6];

console.log(numbers);
console.log(doSomething(numbers));
console.log(negateAllFjs(numbers));
