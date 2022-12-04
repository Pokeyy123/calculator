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
const clear = document.querySelector('.clear');
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
    displayData = eval(displayData);
    display.textContent = displayData;
})

clear.addEventListener('click', () => {
    displayData = "";
    display.textContent = displayData;
})