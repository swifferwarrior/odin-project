const palindromes = function (string) {
    // console.log("Prior to mods: " + string)

    string = string.replace(/\s+/g, ""); //removes whitespace
    // console.log("whitespace removal: " + string);

    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""); //removes punctuation
    // console.log("punctuation removal: " + string);

    string = string.toLowerCase();
    // console.log('lowercase: ' + string)

    let revString = string;
    // console.log("Revstring: " + revString + "   String: " + string);

    let buffer = revString.split(''); //splits string into array of substrings. Must specify ''
    // console.log("Buffer: " + buffer)
    buffer.reverse(); //reverses
    // console.log("Buffer reversed: " + buffer)
    // console.log(buffer[0])
    buffer = buffer.join(''); //rejoins
    // console.log("Buffer rejoined: " + buffer)
    revString = buffer;
    // console.log("Now does " + revString + " equal " + string + " after reversal?");
    // console.log("");

    // if(string === revString){
    //     return true;
    // }
    //     return false;
    return string === revString ? true : false;
};

// palindromes('racecar')

// palindromes('Racecar!')

// palindromes('A car, a man, a maraca.')

// palindromes('Animal loots foliated detail of stool lamina.')

// palindromes('ZZZZ car, a man, a maraca.')




module.exports = palindromes
