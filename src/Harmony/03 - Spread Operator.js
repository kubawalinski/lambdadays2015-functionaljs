require("traceur-runtime");

var add = function(x,y,z){
    return x+y+z;
};

console.log(add(...[1,2,3]));