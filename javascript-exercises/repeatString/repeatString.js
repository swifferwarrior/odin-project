const repeatString = function(string, number) {
    let str = string;
    let strRepeat = '';
    let i = 0;

    if (number < 0){
        return('ERROR');
    }
    
    while (i < number){
        strRepeat += str;
        i++;
    }
    
  return(strRepeat);  
}

module.exports = repeatString
