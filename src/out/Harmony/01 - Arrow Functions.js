console.log([1, 2, 3, 4].map((function(x) {
  return x * 2;
})));
var square = (function(x) {
  return x * x;
});
console.log(square);
console.log(square(4));
