//what does this function do?
module.exports = function(array) {
    var result = [];
    for(var i = 0 ; i < array.length ; ++i){
        result[i] = array[i];
        if(array[i] > 0){
            result[i] *= -1;
        }
    }
    return result;
};