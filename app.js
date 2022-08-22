const numBtn = document.querySelectorAll(".num");
const opBtn = document.querySelectorAll(".operator");
const addBtn = document.querySelector("#btnAdd");
const subtractBtn = document.querySelector("#btnSubtract");
const multiplyBtn = document.querySelector("#btnMultiply");
const divideBtn = document.querySelector("#btnDivide");
const clearBtn = document.querySelector("#btnClear");
const equalsBtn = document.querySelector("#btnEquals");
let displayValue = document.querySelector("#display");
let x = 0;
let y = 0;
let op = " ";
let answer = " ";

function addNumDisplay() {
  if (displayValue.textContent === answer.toString()) {
    displayValue.textContent = "";
  }
  displayValue.textContent += this.textContent;
  console.log(this.textContent);
  console.log(op);
}
for (let i = 0; i < numBtn.length; i++) {
  numBtn[i].addEventListener("click", addNumDisplay);
}

addBtn.addEventListener("click", opAdd);
subtractBtn.addEventListener("click", opSubtract);
multiplyBtn.addEventListener("click", opMultiply);
divideBtn.addEventListener("click", opDivide);
equalsBtn.addEventListener("click", opEquals);

function opAdd() {
  console.log(op);
  registry();
  op = "add";
}

function opSubtract() {
  console.log(op);
  registry();
  op = "subtract";
}

function opMultiply() {
  console.log(op);
  registry();
  op = "multiply";
}

function opDivide() {
  console.log(op);
  registry();
  op = "divide";
}

function opEquals() {
  console.log(op);
  registry();
  op = "";
}
const funcAdd = (x, y) => {
  answer = x + y;
  console.log("added");
};

const funcSubtract = (x, y) => {
  answer = parseInt(x) - parseInt(y);
  console.log("subtracted");
};

const funcMultiply = (x, y) => {
  answer = parseInt(x) * parseInt(y);
  console.log("multiplied");
};

const funcDivide = (x, y) => {
  answer = parseInt(x) / parseInt(y);
  console.log("divided");
};

const operate = (x, y) => {
  switch (op) {
    case "add":
      return funcAdd(x, y);
    case "subtract":
      return funcSubtract(x, y);
    case "multiply":
      return funcMultiply(x, y);
    case "divide":
      return funcDivide(x, y);
  }
};

function registry() {
  if (x === 0) {
    x = displayValue.textContent;
    answer = displayValue.textContent;
  } else {
    y = displayValue.textContent;
    operate(x, y);
    displayValue.textContent = answer;
    x = answer;
    y = 0;
  }
  if (displayValue.textContent.includes(NaN)) {
    x = 0;
    y = 0;
    displayValue.textContent = " ";
  }
  console.log(`x = ${x}, y = ${y}`);
}

// function funSubtract() {
//   if (x === 0) {
//     x = displayValue.textContent;
//     answer = displayValue.textContent;
//     console.log("x = 0");
//   } else if (y === 0) {
//     y = displayValue.textContent;
//     console.log("y = 0");
//     answer = parseInt(x) - parseInt(y);
//     displayValue.textContent = answer;
//     x = answer;
//   } else {
//     y = displayValue.textContent;
//     console.log("y = x = 0");
//     answer = parseInt(x) - parseInt(y);
//     displayValue.textContent = answer;
//     x = answer;
//   }
//   console.log(`x = ${x}, y = ${y}`);
// }

// function funMultiply() {
//   if (x === 0) {
//     x = displayValue.textContent;
//     answer = displayValue.textContent;
//     console.log("x = 0");
//   } else if (y === 0) {
//     y = displayValue.textContent;
//     console.log("y = 0");
//     answer = parseInt(x) * parseInt(y);
//     displayValue.textContent = answer;
//     x = answer;
//   } else {
//     y = displayValue.textContent;
//     console.log("y = x = 0");
//     answer = parseInt(x) * parseInt(y);
//     displayValue.textContent = answer;
//     x = answer;
//   }
//   console.log(`x = ${x}, y = ${y}`);
// }

// function funDivide() {
//   if (x === 0) {
//     x = displayValue.textContent;
//     answer = displayValue.textContent;
//     console.log("x = 0");
//   } else if (y === 0) {
//     y = displayValue.textContent;
//     console.log("y = 0");
//     answer = parseInt(x) / parseInt(y);
//     displayValue.textContent = answer;
//     x = answer;
//   } else {
//     y = displayValue.textContent;
//     console.log("y = x = 0");
//     answer = parseInt(x) / parseInt(y);
//     displayValue.textContent = answer;
//     x = answer;
//   }
//   console.log(`x = ${x}, y = ${y}`);
// }

clearBtn.addEventListener("click", clear);

function clear() {
  x = 0;
  y = 0;
  displayValue.textContent = "";
}
