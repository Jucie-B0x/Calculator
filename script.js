//event listeners
document.querySelectorAll("button").forEach(function (element) {
  element.addEventListener("click", findValue);
});

function add(a, b) {
  display(a + b);
}

function subtract(a, b) {
  display(a - b);
}

function multiply(a, b) {
  display(a * b);
}

function divide(a, b) {
  display(a / b);
}

function findValue() {
  return buttonValue = this.textContent || this.innerText;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
            add(num1, num2);
            break;
        case "-" :
            subtract(num1,num2);
            break;
        case "*" :
            multiply(num1,num2);
            break;
        case "/" :
            divide(num1, num2);
            break;
    } 
}

function display(equation) {
  let screen = document.querySelector("#displayScreen");
  return (screen.innerHTML = equation);
}
