const operate = (x, op, y) => {
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
};
