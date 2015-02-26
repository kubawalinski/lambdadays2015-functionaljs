require("traceur-runtime");
var add = function(x, y, z) {
  return x + y + z;
};
console.log(add.apply((void 0), $traceurRuntime.spread([1, 2, 3])));
