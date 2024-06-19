/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/
let firstOperand = '';
let secondOperand = '';
let currentOperator = null;

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const value = event.target.innerText;

    if (event.target.classList.contains('number')) {
      handleNumber(value);
    } else if (event.target.classList.contains('operator')) {
      handleOperator(value);
    } else if (value === '=') {
      handleEquals();
    } else if (value === 'C') {
      handleClear();
    }
  });
});

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const value = event.target.innerText.trim();

    // Other conditions...

    if (value === 'C') {
      handleClear();
    }
  });
});

/*-------------------------------- Functions --------------------------------*/
function handleNumber(value) {
  if (currentOperator === null) {
    firstOperand += value;
    display.innerText = firstOperand;
  } else {
    secondOperand += value;
    display.innerText = secondOperand;
  }
}

function handleOperator(value) {
  if (firstOperand && secondOperand) {
    handleEquals();
  }
  currentOperator = value;
}

function handleEquals() {
  let result = 0;
  const num1 = parseFloat(firstOperand);
  const num2 = parseFloat(secondOperand);

  switch (currentOperator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      return;
  }

  display.innerText = result;
  firstOperand = `${result}`;
  secondOperand = '';
  currentOperator = null;
}

function handleClear() {
  firstOperand = '';
  secondOperand = '';
  currentOperator = null;
  display.innerText = '0';
}
