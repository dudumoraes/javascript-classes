
let num1;
let currentNum;
let operation;
const display = document.querySelector('input#numDisplay');

function numButton(num) {
    display.value += num;
    currentNum += num;
}

function add() {
    operation = '+'
    num1 = Number(display.value)
    display.value += '+'
    currentNum = ''
}
function subtract() {
    operation = '-'
    num1 = Number(display.value)
    display.value += '-'
    currentNum = ''
}

function resolve() {
    console.log(operation)
    let result;
    if (operation == '+') {
     result = num1 + Number(currentNum)
    } else if (operation == '-') {
     result = num1 - Number(currentNum)
    } else if (operation == '×') {
     result = num1 * Number(currentNum)
    } else { 
     result = num1 / Number(currentNum)
    }

    display.value = result;
}
