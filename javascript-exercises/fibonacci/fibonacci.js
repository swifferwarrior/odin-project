const fibonacci = function(number) {
    let current = 0;
    let next = 1;
    let sum = 0;
    
    if (number == 1){
        sum = 1;
        return sum;
    }
    if (number < 0){
        return "OOPS";
    }

    for (i = 1; i < number; i++){
        sum = current + next;
        // console.log(i + ") Current: " + current  + " + Next: " + next + " = " + sum);
        current = next;
        next = sum;
    }

    return sum;

}

module.exports = fibonacci
