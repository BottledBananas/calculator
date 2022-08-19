const add = document.querySelector("#btnAdd");
const subtract = document.querySelector("#btnSubtract");
const multiply = document.querySelector("#btnMultiply");
const divide = document.querySelector("#btnDivide");
const numBtn = document.querySelectorAll(".num");
const opBtn = document.querySelectorAll(".operator");
const addBtn = document.querySelector("#btnAdd");
const subtractBtn = document.querySelector("#btnSubtract");
const multiplyBtn = document.querySelector("#btnMultiply");
const divideBtn = document.querySelector("btnDivide");
const clearBtn = document.querySelector("#btnClear");
let displayValue = document.querySelector("#display");
let x = 0;
let y = 0;
let answer = "";

//This function makes all button numbers usable
function addNumDisplay() {
  if (displayValue.textContent === answer.toString()) {
    displayValue.textContent = "";
  }
  displayValue.textContent += this.textContent;
}
for (let i = 0; i < numBtn.length; i++) {
  numBtn[i].addEventListener("click", addNumDisplay);
}
//end number buttons

//Adder function, almost working!
addBtn.addEventListener("click", test);

function test() {
  if (x === 0) {
    x = displayValue.textContent;
    answer = displayValue.textContent;
    console.log("x = 0");
  } else if (y === 0) {
    y = displayValue.textContent;
    console.log("y = 0");
    answer = parseInt(x) + parseInt(y);
    displayValue.textContent = answer;
    x = answer;
  } else {
    y = displayValue.textContent;
    console.log("y = x = 0");
    answer = parseInt(x) + parseInt(y);
    displayValue.textContent = answer;
    x = answer;
  }
  console.log(`x = ${x}, y = ${y}`);
}

clearBtn.addEventListener("click", clear);

function clear() {
  x = 0;
  y = 0;
  displayValue.textContent = "";
}

//MAKE THIS WORK LIKE A CHEAP POCKET CALCULATOR
//ONCE A SECOND OPERATOR IS PUT IN, THE OPERATE FUNCTION SHOULD
//EXECUTE AND STORE THE ANSWER
//THINK ARRAY.SORT
// function operate(x, op, y) {
//   const funcAdd = (x, y) => {
//     return (x += y);
//   };

//   const funcSubtract = (x, y) => {
//     return (x -= y);
//   };

//   const funcMultiply = (x, y) => {
//     return (x *= y);
//   };

//   const funcDivide = (x, y) => {
//     return (x /= y);
//   };
//   if ((op = "add")) {
//     return funcAdd(x, y);
//   } else if ((op = subtract)) {
//     return funcSubtract(x, y);
//   } else if ((op = multiply)) {
//     return funcMultiply(x, y);
//   } else if ((op = divide)) {
//     return funcDivide(x, y);
//   } else {
//     return "there is no operator";
//   }
// }
