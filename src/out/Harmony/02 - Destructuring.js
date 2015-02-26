var $__1,
    $__2;
require("traceur-runtime");
var $__0 = [1, 2, 3],
    fst = ($__1 = $__0[$traceurRuntime.toProperty(Symbol.iterator)](), ($__2 = $__1.next()).done ? void 0 : $__2.value),
    snd = ($__2 = $__1.next()).done ? void 0 : $__2.value,
    trd = ($__2 = $__1.next()).done ? void 0 : $__2.value;
console.log(fst, snd, trd);
var $__3 = {
  w: 0,
  x: 1,
  y: 2,
  z: 3
},
    x = $__3.x,
    y = $__3.y,
    z = $__3.z,
    missing = $__3.missing;
console.log(x, y, z, missing);
