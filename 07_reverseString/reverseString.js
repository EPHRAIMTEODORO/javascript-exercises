const reverseString = function(word) {
    word = word.split();
    l = 0;
    r = word.length();
    while(l<r){
        [word[l], word[r]] = [word[r] = word[l]];
    }
    return word.join();
};

// Do not edit below this line
module.exports = reverseString;
