//TODO: Pressing operator button will store command for next turn
//TODO:
let digit = document.getElementsByClassName('dig');
let operators = document.getElementsByClassName('op');
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

// let x = "";

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

// window.addEventListener('keydown', function (e) { //Tests inputs are being registered
//     console.log(e.keyCode)
// })


// window.addEventListener('keydown', (e) => {
//     display += e.span;
// })

clear.addEventListener('click', () => {
    press();
    console.log('you pressed clear')
    mem = 0;
    display.value = "";

})

for (let i = 0; i < digit.length; i++) {
    digit[i].addEventListener('click', buttonToDisplay(i));
}


function buttonToDisplay(i) {
    return function () {
        press();
        // alert(digit[i].innerHTML)
        display.value += digit[i].innerHTML;
        if(display.value == "58008"){
            let giggle = new Audio('oh-giggle.mp3');
            giggle.volume = 0.05;
            giggle.play();
        }
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
<<<<<<< HEAD
    press();
=======
>>>>>>> 9df07795bd236fd5b4f0d3c9fff04b17ad0cfab5
    display.value = mem;
    plugAndChug();
    // operate(Number(nextCommand),Number(mem),Number(display.value));
    nextCommand = 0;

});

document.getElementById('min').addEventListener('click', () => {
    console.log("Subtracting " + mem + "-" + display.value);
    press();
    plugAndChug();
    // operate(Number(nextCommand), mem, display.value);
    nextCommand = 1;
    display.value = mem;
});

document.getElementById('mul').addEventListener('click', () => {
    console.log("Multiplying " + mem + "*" + display.value);
    press();
    plugAndChug();
    // operate(2, mem, display.value);
    nextCommand = 2;
    display.value = mem;

});

document.getElementById('div').addEventListener('click', () => {
    console.log("Dividing " + mem + "/" + display.value);
    press();
    plugAndChug();
    // operate(3, mem, display.value);
    nextCommand = 3;
    display.value = mem;
});

document.getElementById('ent').addEventListener('click', () => {
    console.log("Adding " + mem + "+" + display.value);
    press();
    plugAndChug();
    // operate(Number(nextCommand), mem, display.value);
});

// document.getElementById('buttons').addEventListener('click', press());

let calcButtons = document.getElementsByName('button');

for(const butt in calcButtons){
    addClickListener(butt);
}

// function addClickListener(b){
//     b.addEventListener('click', press());
// }

function press() {
    // this.addEventListener
    let audio = new Audio('button-press.mp3');
    audio.volume = 0.05;
    audio.play();
};




