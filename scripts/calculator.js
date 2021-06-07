let num1;
let currentNum;
let operation;

const display = document.querySelector('input#numDisplay');

function numButton(num) {
    display.value += num;
    currentNum += num;
}

function add() {
    operation = '+';
    num1 = Number(display.value);
    display.value += '+';
    currentNum = '';
}

function resolve() {
    if (operation == '+') {
        const result = num1 + Number(currentNum);
    } else if (operation == '-') {

    } else if (operation == '*') {

    } else {

    }

    display.value = result;
}
