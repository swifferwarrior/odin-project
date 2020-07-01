function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let x = "";

//operate(mem, current, mathFx)

function operate(x, a, b) {
    switch (x) {
        case plus:
            add(a, b);
            break;
        case minus:
            subtract(a, b);
            break;
        case times:
            multiply(a, b,);
            break;
        case div:
            divide(a, b);
            break;
        default:
            text = "Err: Try again."
    }
}

window.addEventListener('keydown', function (e) {
    console.log(e.keyCode)
})

let digit = document.getElementsByClassName('dig');
let display = document.getElementById('display');
let clear = document.getElementById('clr');
let mem = 0;

// window.addEventListener('keydown', (e) => {
//     display += e.span;
// })

clear.addEventListener('click', () => {
    console.log('you pressed clear')
    mem = 0;
    display.value = "";
    
})

for (let i=0; i < digit.length; i++){
    digit[i].addEventListener('click',buttonToDisplay(i));
    }


function buttonToDisplay(i){
    return function(){
        // alert(digit[i].innerHTML)
        display.value += digit[i].innerHTML;
    }
} 
//note: For each button to be in their own scope, the function was removed
//from the previous loop so that each button creates their own scope



