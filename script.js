
//event listeners
document.querySelectorAll("button").forEach(function(element) {
    element.addEventListener("click", findValue);
})


function add(a,b) {
    return sum = a + b;
}

function subtract(a, b) {
    return difference = a - b;
}

function multiply(a, b) {
    return product = a * b;
}

function divide(a,b) {
    return quotient = a / b;
}

function findValue(){
    let buttonValue = this.textContent || this.innerText;
    let temp = buttonValue;
    display(temp);
    

}

function operate() {}

function display(equation) {
    let screen = document.querySelector(".displayScreen")
    screen.write(equation);
}
