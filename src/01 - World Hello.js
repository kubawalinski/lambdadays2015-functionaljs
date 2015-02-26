var concat = function(a, b){
    //return a + ' ' + b;
    return [a,b].join(' ');
};

var flip = function(f,a,b){
    return f(b,a);
};

console.log(flip(concat, "Lambda Days", "Hello"));
