function add(a, b){
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b){
    return +a * +b;
}

function divide(a, b) {
    return +a / +b;
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
    if (operand === "0" || !operand){
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
const innerContainer = document.querySelector(".inner-container");

const testingWindow = document.createElement("p");
calculator.prepend(testingWindow);

function tempTestFunction() {
    testingWindow.style.fontSize = "0.4em";
    testingWindow.textContent = `num1: ${num1 ? num1 : ""}, num2: ${num2 ? num2: ""}, op: ${operator ? operator : ""}`
}

function operate(operator, num1, num2){
    switch(operator){
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "X":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
        default:
            return;
    }
}

function updateDisplay(testfunc=null) {
    if (tempResult){
        display.innerText = tempResult;
    } else if (ready(num2)){
        display.innerText = num2;
    } else {
        display.innerText = num1;
    }
    if (testFunc) {
        testFunc();
    }
}

function clear() {
    num1 = 0;
    num2 = null;
    // come back to the below
    operator = null;
    tempResult = null;

    updateDisplay(testFunc=tempTestFunction)
}

function ui() {
    display.innerText = num1;
    innerContainer.addEventListener("click", (e) => {
        if(!e.target.tagName == "BUTTON") return;
        if(e.target.classList.contains("digit")) {
            const value = e.target.innerText;
            console.log(e.target.innerText)
            if (ready(num2) ){
                num2 = addDigit(num2, value)
            } else {
                num1 = addDigit(num1, value)
            }
            updateDisplay(testFunc=tempTestFunction)
        } else if (e.target.classList.contains("clear")){
            clear();
        } else if (e.target.classList.contains("operator")){
            num2 = "";
            operator = e.target.innerText;
        } else if (e.target.classList.contains("equals")){
            //  a temp variable usage may matter latter for refactor.
            tempResult = operate(operator, num1, num2);
            console.log(tempResult)
            num1 = tempResult;
            num2 = "";
            updateDisplay(testFunc=tempTestFunction);
        }
    })
}

ui()