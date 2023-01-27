function add() {}

function subtract() {}

function divide() {}

function multiply() {}

function operate() {}

function display(value) {
    const screen = document.querySelector("displayScreen");
  
}

//event listeners
const buttons = document.querySelectorAll('[id^="num"]');
// console.log(buttons);
for (const button of buttons) {
  button.addEventListener("click", function(e){
    console.log(e);
  });
}
