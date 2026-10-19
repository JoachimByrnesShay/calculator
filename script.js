function add(a, b){
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let operator;
let num1 = "0";
let num2;
let tempResult;

function not(val){
    return val === undefined || val === null;
}
function ready(val) {
    return typeof val === "string";
}

function addDigit(operand, d){
    if (operand === "0"){
        operand = d;
    } else {
        operand += d;
    }
    return operand;
} 


const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");
const input = document.querySelector(".input");
const calculator = document.querySelector(".calculator");

const testingWindow = document.createTextNode("");

calculator.prepend(testingWindow);
testingWindow.textContent = "test";

function operate(operator, num1, num2){
    switch(operator){
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
        default:
            return;
    }
}

function updateDisplay() {
    if (num1 != undefined || num1 != null){
        display.innerText = num1;
    }
}

function clear() {
    num1 = 0;
    num2 = null;
    // come back to the below
    operator = null;
    tempResult = null;

    updateDisplay()
}

function ui() {
    display.innerText = num1;
    input.addEventListener("click", (e) => {
        if(!e.target.tagName == "BUTTON") return;
        if(e.target.classList.contains("digit")) {
            const value = e.target.innerText;
            console.log(e.target.innerText)
            if (ready(num2) ){
                num2 = addDigit(num2, value)
            } else {
                num1 = addDigit(num1, value)
            }
            updateDisplay()
        } else if (e.target.classList.contains("clear")){
            clear();
        }
    })
}

ui()