let currentNumber = "";
let previousNumber = "";
let operator = null;

const appendNumber = (number) => {
  currentNumber += number;
  document.getElementById("display").value = currentNumber;
};

const deleteLast = () => {
    const displayValue = document.getElementById("display").value;
    if (displayValue.length > 0) {
      document.getElementById("display").value = displayValue.slice(0, -1);
    }
  };
  
const appendOperator = (op) => {
  if (currentNumber === "") {
    return;
  }
  previousNumber = currentNumber;
  currentNumber = "";
  operator = op;
};

const clearDisplay = () => {
  currentNumber = "";
  previousNumber = "";
  operator = null;
  document.getElementById("display").value = "";
};

const calculate = () => {
  if (currentNumber === "" || operator === null) {
    return;
  }
  let result = 0;
  switch (operator) {
    case "+":
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case "/":
      if (currentNumber === "0") {
        alert("Division by zero is not allowed!");
        return;
      }
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }
  currentNumber = result.toString();
  previousNumber = "";
  operator = null;
  document.getElementById("display").value = currentNumber;
};
