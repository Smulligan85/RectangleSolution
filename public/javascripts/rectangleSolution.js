function strMaker(strArr) {
    rectangleString = "";
    rectangleString += '*********\n';
    strArr.forEach(function(word) {
        rectangleString += '* ' + word + ' *\n';
    });
    rectangleString += '*********';
    return rectangleString;
}

function findLongestWord(array) {
    var longestWord = 0;
    array.forEach(function(word) {
        if (word.length > longestWord) {
            longestWord = word.length;
        }
    });
    return longestWord;
}


function strMakerWithSize(strArr) {
    var recSize = findLongestWord(strArr) + 4;
    var endLine = '*'.repeat(recSize);
    var rectangleString = "";
    rectangleString += endLine + '\n';
    strArr.forEach(function(word) {
        var findLength = recSize - (word.length + 3);
        var spaceFill = " ".repeat(findLength);
        rectangleString += '* ' + word + spaceFill + '*\n';
    });
    rectangleString += endLine + '\n';
    return rectangleString;
}

var arr = ["Hello", "World", "in", "a", "frame"];
console.log(strMakerWithSize(arr));
console.log(strMaker(arr));
