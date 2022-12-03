function add(a ,b) {
    return a + b;
}

function substract(a ,b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator,a , b) {
    if(operator === '+') {
        return add(a,b);
    } else if(operator === '-') {
        return substract(a,b);
    } else if(operator === '*') {
        return multiply(a,b);
    } else if(operator === '/') {
        return divide(a,b);
    } else {
        return "ERROR";
    }
}
const equals = document.querySelector('.equals');
let displayData = "";
let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".num, .oper");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonValue = button.getAttribute('data-num');
        displayData += buttonValue;
        display.textContent = displayData; 
    })
})

equals.addEventListener("click", () => {
    if(buttonValue == '+') {
        display.operate(buttons);
        display.textContent = displayData;

    };
})

