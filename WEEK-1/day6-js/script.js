// Even/Odd Checker
function checkEvenOdd() {
  const num = Number(document.getElementById("evenOddInput").value);
  const result = document.getElementById("evenOddResult");

  if (isNaN(num)) {
    result.textContent = "Please enter a valid number!";
    return;
  }

  if (num % 2 === 0) {
    result.textContent = `${num} is Even ✅`;
  } else {
    result.textContent = `${num} is Odd ❌`;
  }
}

// Simple Calculator
function calculate() {
  const num1 = Number(document.getElementById("calcNum1").value);
  const num2 = Number(document.getElementById("calcNum2").value);
  const op = document.getElementById("operation").value;
  const result = document.getElementById("calcResult");

  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Please enter valid numbers!";
    return;
  }

  let answer;

  switch(op) {
    case "add":
      answer = num1 + num2;
      break;
    case "subtract":
      answer = num1 - num2;
      break;
    case "multiply":
      answer = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        answer = "Cannot divide by zero!";
      } else {
        answer = num1 / num2;
      }
      break;
    default:
      answer = "Invalid operation!";
  }

  result.textContent = `Result: ${answer}`;
}
