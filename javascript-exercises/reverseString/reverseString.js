const reverseString = function (string) {
    let str = string;
    let reverseStr = '';

    for (i = str.length-1; i >-1; i--) {
        reverseStr += str.charAt(i);
    }
    return(reverseStr);
}

module.exports = reverseString
