class Calculator {
  constructor(previousOppElement, currentOppElement) {
    this.previousOppElement = previousOppElement;
    this.currentOppElement = currentOppElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if(this.currentOperand === '') return;
    if(this.previousOperand !== '') {
        this.compute()
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand
    this. currentOperand = '';
  }

  compute() {
    let result
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = (prev / current);
            break;
            default:
                return;
    }
    this.currentOperand = result.toFixed(2);
    this.operation = undefined;
    this.previousOperand = '';
}

  updateDisplay() {
    this.currentOppElement.innerText = this.currentOperand;
    if(this.operation != null) {
        this.previousOppElement.innerText = 
        `${this.previousOperand} ${this.operation}`
    }
    this.previousOppElement.innerText = this.previousOperand;
  }
}
const numberButtons = document.querySelectorAll("[data-number]");
const oppButtons = document.querySelectorAll("[data-operator]");
const clearButton = document.querySelector("#oppClear");
const deleteButton = document.querySelector("#oppDel");
const equalButton = document.querySelector("#oppEnter");
const previousOppElement = document.querySelector("#previous-opp");
const currentOppElement = document.querySelector("#current-opp");

const calculator = new Calculator(previousOppElement, currentOppElement);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

oppButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalButton.addEventListener("click", button =>{
    calculator.compute();
    calculator.updateDisplay();
})

clearButton.addEventListener("click", button =>{
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener("click", button =>{
    calculator.delete();
    calculator.updateDisplay();
})