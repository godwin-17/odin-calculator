function add (a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button.num");
const clearBtn = document.querySelector("button.clear");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");

let firstNumber;
let secondNumber;
let operator2;


buttons.forEach(button => {
  button.addEventListener("click", () => {

    if (display.textContent === "ERROR!") {
      display.textContent = "";
    }
    
    display.textContent += button.textContent;
  });
});

operators.forEach(operator => {
  operator.addEventListener("click", () => {

    firstNumber = Number(display.textContent);

    display.textContent = "";

    if (operator.textContent === "+") {
      operator2 = "+";
    } else if (operator.textContent === "-") {
      operator2 = "-";
    } else if (operator.textContent === "*") {
      operator2 = "*";
    } else if (operator.textContent === "/") {
      operator2 = "/";
    };

  });
});

equals.addEventListener("click", () => {
  secondNumber = Number(display.textContent);

  if (operator2 === "+") {
    display.textContent = add(firstNumber, secondNumber);
  } else if (operator2 === "-") {
    display.textContent = subtract(firstNumber, secondNumber);
  } else if (operator2 === "*") {
    display.textContent = multiply(firstNumber, secondNumber);
  } else if (operator2 === "/" && secondNumber === 0) {
    display.textContent = "ERROR!";
  } else if (operator2 === "/") {
    display.textContent = divide(firstNumber, secondNumber);
  };

});

clearBtn.addEventListener("click", () => {
  display.textContent = "";
});