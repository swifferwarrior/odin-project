const removeFromArray = function (array, ...argument) {
    let list = array;
    let arg = Array.from(argument);


    arg.forEach(function(element){
        for (i = 0; i < list.length; i++) {
            if (array[i] == element) {
                let removal = list[i];
                list.splice(i, 1);
            }
        }
    });

    return list;
}

module.exports = removeFromArray
