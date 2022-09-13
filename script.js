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

function operate(operator, a, b) {

}

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button.num");
const clearBtn = document.querySelector("button.clear");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    if (button.textContent === "Clear") {
      display.textContent = "";
    }

    display.textContent += button.textContent;
  });
});


clearBtn.addEventListener("click", () => {
  display.textContent = "";
});