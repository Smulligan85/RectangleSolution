function strMaker(strArr) {
    var rectangleString = "";
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


function strMakerWithEvenSides(strArr) {
    var recSize = findLongestWord(strArr) + 4;
    var endLine = '*'.repeat(recSize);
    var rectangleString = "";
    rectangleString += endLine + '\n';
    strArr.forEach(function(word) {
        var spaceFillLength = recSize - (word.length + 4);
        var spaceFill = " ".repeat(spaceFillLength);
        rectangleString += '* ' + word + spaceFill + ' *\n';
    });
    rectangleString += endLine + '\n';
    return rectangleString;
}

var arr = ["Hello", "World", "in", "a", "frame"];
console.log(strMakerWithEvenSides(arr));
console.log(strMaker(arr));
