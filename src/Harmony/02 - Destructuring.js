require("traceur-runtime");

var [fst, snd, trd] = [1,2,3];
console.log(fst, snd, trd);

var {x, y, z, missing} = {w: 0, x: 1, y: 2, z:3};
console.log(x,y,z,missing);
