let display = document.getElementById('display');
let previousOperator = null;
let previousOperand = null;

function appendNumber(number) {
    if (number === 'C') {
        display.value = '';
        previousOperator = null;
        previousOperand = null;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    if (previousOperator) {
        calculate();
    }
    previousOperator = operator;
    previousOperand = parseFloat(display.value);
    display.value += operator;
}

function calculate() {
    let currentOperand = parseFloat(display.value.substring(display.value.lastIndexOf(previousOperator) + 1));
    let result;

    switch (previousOperator) {
        case '+':
            result = previousOperand + currentOperand;
            break;
        case '-':
            result = previousOperand - currentOperand;
            break;
        case '*':
            result = previousOperand * currentOperand;
            break;
        case '/':
            if (currentOperand === 0) {
                display.value = "Error";
                return;
            }
            result = previousOperand / currentOperand;
            break;
        case '%':
            result = previousOperand * (currentOperand / 100);
            break;
        default:
            return;
    }

    display.value = result;
    previousOperator = null;
    previousOperand = null;
}
