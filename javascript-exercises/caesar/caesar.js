const caesar = function (string, times) {
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let beta = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\W|\s/
    let newString = "";

    let list = string.split('');

    for (i = 0; i < list.length; i++) {
        if(times < 0){times = 26 + (times % 26);} //for reverse shifts

        if (regex.test(list[i])) {
            newString += list[i];
        }

        for (j = 0; j < alpha.length; j++) {
            if (list[i] == alpha[j]) {
                j += times;
                let k = j % 26;
                newString += alpha[k];
            }

            if (list[i] == beta[j]) {
                j += times;
                let k = j % 26;
                newString += beta[k];
            }
        }
    }
    return newString;
}

module.exports = caesar;