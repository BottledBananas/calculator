const add = document.querySelector("#btnAdd");
const subtract = document.querySelector("#btnSubtract");
const multiply = document.querySelector("#btnMultiply");
const divide = document.querySelector("#btnDivide");
let displayValue = document.querySelector("#display").textContent;
const numBtn = document.querySelectorAll(".num");

//CREATE EVENT LISTENERS FOR ALL THE BUTTONS
//THEY SHOULD ADD THEIR TEXT CONTENT TO DISPLAYVALUE

function test() {
  document.querySelector("#display").textContent += this.textContent;
}
for (let i = 0; i < numBtn.length; i++) {
  numBtn[i].addEventListener("click", test);
}

numBtn.addEventListener("click", test);

//MAKE THIS WORK LIKE A CHEAP POCKET CALCULATOR
//ONCE A SECOND OPERATOR IS PUT IN, THE OPERATE FUNCTION SHOULD
//EXECUTE AND STORE THE ANSWER
//THINK ARRAY.SORT
function operate(x, op, y) {
  const funcAdd = (x, y) => {
    return (x += y);
  };

  const funcSubtract = (x, y) => {
    return (x -= y);
  };

  const funcMultiply = (x, y) => {
    return (x *= y);
  };

  const funcDivide = (x, y) => {
    return (x /= y);
  };
  if ((op = "add")) {
    return funcAdd(x, y);
  } else if ((op = subtract)) {
    return funcSubtract(x, y);
  } else if ((op = multiply)) {
    return funcMultiply(x, y);
  } else if ((op = divide)) {
    return funcDivide(x, y);
  } else {
    return "there is no operator";
  }
}
