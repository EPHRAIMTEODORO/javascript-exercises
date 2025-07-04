const removeFromArray = function(arr, elem) {
    for(let i = 0; i < arr.length; i++ ){
        if(arr[i] === elem){
            arr.splice(i,1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
