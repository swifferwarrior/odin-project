const sumAll = function(first, last) {
    let sum = 0;
    let high = 0;
    let low = 0;

    if (last > first){
        high = last;
        low = first;
    } else {
        low = last;
        high = first;
    }

    for (i = low; i < high+1; i++){
        sum += i;
    }

    if( sum < 0 || 
        isNaN(first) || 
        isNaN(last) || 
        typeof first === 'string' ||
        typeof last === 'string'){
        return "ERROR";
    }
    return sum;
}

module.exports = sumAll
