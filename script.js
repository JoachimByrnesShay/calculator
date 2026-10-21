function add(a,b){
   
    return +a + +b;
}

function subtract(a, b) {
  
    return +a - +b;
}

function multiply(a,b){
 
    return +a * +b;
}

function divide(a,b) {
  
    return +a / +b;
}

// This design hinging upon varying states (types) of num2 results in too much complexity.
// revise the premise and base around whether we have an operator or not, and what to do with that  

let operator = undefined;

let num1 = "0";
let num2 = ""
let result = undefined;

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

// const testingWindow = document.createElement("p");
// calculator.prepend(testingWindow);

// function tempTestFunction() {
//     testingWindow.style.fontSize = "0.4em";
//     testingWindow.textContent = `num1: ${num1 || typeof num1}, num2: ${num2 || typeof num2}, result: ${Result || typeof Result} op: ${operator || typeof operator}`
// }

function operate(operator, a, b){
    
    switch(operator){
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "\u00D7":
            return multiply(a, b);
            break;
        case "\u00F7":
            return divide(a,b);
            break;
        default:
            return;
    }
}

function updateDisplay(testfunc=null) {

    if (result){
        display.innerText = result;
    } else if (operator){
        display.innerText = num2;
    } else {
        display.innerText = num1;
    }
    // if (testFunc) {
    //     testFunc();
    // }
}

function clear() {
    num1 = "0";
    num2 = null;
    // come back to the below
    operator = null;
    result = null;

    updateDisplay()
}

function ui() {
    display.innerText = "0";
    

    const numeric = document.querySelector(".numeric");
    numeric.addEventListener("click", e=>{
     
        if(!(e.target.tagName == "BUTTON")) return;
        // numeric element contains buttons with .digit class as well as non-digit buttons with .sign and .decimal class
        // digit logic etc
        // if num2 is a string and not null or undefined then we are in the process of entering num2, one digit at a time
        if (e.target.classList.contains("sign")){
            if (operator) {
                num2 *= -1;
            } else num1*=-1;
            console.log(
            [num1, num2]
            )
        } else if (e.target.classList.contains("digit") && operator){
            console.log("op")
            num2 = addDigit(num2, e.target.innerText);
        } else {
            console.log("nope")
            num1 = addDigit(num1, e.target.innerText);
        }
        // we want to update the display immediately
        updateDisplay();
    })


    const operators = document.querySelector(".operators");
    operators.addEventListener("click", e=>{
     
        if(!(e.target.tagName == "BUTTON")) return;
        console.log(e.target.innerText == "\u00F7")
        console.log(e.target.innerText == "\u00D7")
        // operator logic:  operators include +, -, / , x, and =
        // equals logic

        // if we already have an operator we should also have a num2 and can update a calculation
        // if we don't have an operator already we do not have a num2 and cannot do any calculations 
        // in some case, we do something and then set operator to current operator

       if (not(operator) || !num2.length) {
            operator = e.target.innerText;
       } else if (operator && num1 && num2.length && e.target.classList.contains("equals")){
            result = operate(operator, num1, num2);
            operator = null;
            num2 = ""
            num1 = result;
            updateDisplay();
        }  else if (operator && num1 && num2.length) {
            result = operate(operator, num1, num2);
            operator = e.target.innerText;
            updateDisplay();
            num2 = ""
            num1 = result;
        } 
        result = null;
    })

    const functional = document.querySelector(".functional");
    functional.addEventListener("click", e=>{
        if(!(e.target.tagName == "BUTTON")) return;
        // functional element contains buttons with .backspace, .clear, and .percentage classes for those functions

        if (e.target.classList.contains("clear")){
            clear();
        }

        if (e.target.classList.contains('percentage')){
            if(operator){
                num2 = num2 / 100;
            } else {
                num1 = num1 / 100;
            }
            updateDisplay();
        }
    })
  
}

ui()