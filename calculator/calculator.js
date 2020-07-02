//TODO: Pressing operator button will store command for next turn
//TODO:
let digit = document.getElementsByClassName('dig');
let display = document.getElementById('display');
let clear = document.getElementById('clr');
let mem = 0;
let nextCommand;

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
        case 0:
            display.value = add(a, b);
            mem = display.value;
            break;
        case 1:
            display.value = subtract(a, b);
            mem = display.value;
            break;
        case 2:
            display.value = multiply(a, b,);
            mem = display.value;
            break;
        case 3:
            display.value = divide(a, b);
            mem = display.value;
            break;
        default:
            text = "Err: Try again."
    }
}

window.addEventListener('keydown', function (e) {
    console.log(e.keyCode)
})


// window.addEventListener('keydown', (e) => {
//     display += e.span;
// })

clear.addEventListener('click', () => {
    console.log('you pressed clear')
    mem = 0;
    display.value = "";

})

for (let i = 0; i < digit.length; i++) {
    digit[i].addEventListener('click', buttonToDisplay(i));
}


function buttonToDisplay(i) {
    return function () {
        // alert(digit[i].innerHTML)
        display.value += digit[i].innerHTML;
    }
}
//note: For each button to be in their own scope, the function was removed
//from the previous loop so that each button creates their own scope
function plugAndChug() {
    operate(Number(nextCommand), Number(mem), Number(display.value));
};
mem

document.getElementById('plu').addEventListener('click', () => {
    console.log("Adding " + mem + "+" + display.value);
    plugAndChug();
    // operate(Number(nextCommand),Number(mem),Number(display.value));
    nextCommand = 0;
});

document.getElementById('min').addEventListener('click', () => {
    console.log("Subtracting " + mem + "-" + display.value);
    plugAndChug();
    // operate(Number(nextCommand), mem, display.value);
    nextCommand = 1;
});

document.getElementById('mul').addEventListener('click', () => {
    console.log("Multiplying " + mem + "*" + display.value);
    plugAndChug();
    // operate(2, mem, display.value);
    nextCommand = 2;
});

document.getElementById('div').addEventListener('click', () => {
    console.log("Dividing " + mem + "/" + display.value);
    plugAndChug();
    // operate(3, mem, display.value);
    nextCommand = 3;
});

document.getElementById('ent').addEventListener('click', () => {
    console.log("Adding " + mem + "+" + display.value);
    plugAndChug();
    // operate(Number(nextCommand), mem, display.value);
});




