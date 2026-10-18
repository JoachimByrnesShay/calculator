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

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");
const input = document.querySelector(".input");

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
    updateDisplay()
}

function ui() {
    display.innerText = num1;
    input.addEventListener("click", (e) => {
        if(!e.target.tagName == "BUTTON") return;
        if(e.target.classList.contains("digit")) {
            const value = e.target.innerText;
            console.log(e.target.innerText)
            if (num1 == "0"){
                num1 = value;
            } else {
                num1 += value;
            }
            updateDisplay()
        } else if (e.target.classList.contains("clear")){
            clear();
        }
    })
}

ui()