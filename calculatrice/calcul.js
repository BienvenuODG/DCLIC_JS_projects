let expression = '';
const resultInput = document.getElementById('result');

function appendNumber(number) {
  expression += number;
  resultInput.value = expression;
}

function addOperator(operator) {
  expression += operator;
  resultInput.value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    resultInput.value = result;
    expression = '';
  } catch (error) {
    resultInput.value = 'Error';
    expression = '';
  }
}

function clearResult() {
  expression = '';
  resultInput.value = '';
}

function deleteLast() {
  expression = expression.slice(0, -1);
  resultInput.value = expression;
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (/^[0-9]$/.test(key)) {
        appendNumber(key);
    } else if (['+', '-', '*', '/', '%'].includes(key)) {
        addOperator(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearResult();
    }
  });