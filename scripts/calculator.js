let num1 = '0'
let currentNum = '0'
let operation
const display = document.querySelector('input#numDisplay')
let = res
function numButton(num) {
    display.value += num
    currentNum += num
}
function clean(){
    display.value = '' 
    currentNum = ''
}
function point() {
    display.value += '.'
    currentNum += '.'
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
function multiply() {
    operation = '×'
    num1 = Number(display.value)
    display.value += '×'
    currentNum = ''
}
function division() {
    operation = '÷'
    num1 = Number(display.value)
    display.value += '÷'
    currentNum = ''
}
function resolve() {
    let result;
    if (operation == '+') {
     result = num1 + Number(currentNum)
    } else if (operation == '-') {
     result = num1 - Number(currentNum)
    } else if (operation == '×') {
     result = num1 * Number(currentNum)
    } else if(operation == '÷') { 
     result = num1 / Number(currentNum)
    }
    display.value = parseFloat(result)

}
