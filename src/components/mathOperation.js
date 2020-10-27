const sum = "+";
const subtract = "-";
const div = "/";
const multiplе = "*";

export const Operations = (num1, num2, operation) => {
  let result;

  switch (operation) {
    case sum:
      result = num1 + num2;
      break;
    case subtract:
      result = num1 - num2;
      break;
    case div:
      result = num1 / num2;
      break;
    case multiplе:
      result = num1 * num2;
      break;
    default:
      result = 0;
  }

  return result;
};

export const concatNum = (numCurrent, numConcat) => {
  if (numCurrent === "0" || numCurrent === null) {
    numCurrent = "";
  }
  if (numConcat === "." && numCurrent === "") {
    return "0.";
  }
  if (numConcat === "." && numCurrent.indexOf(".") > -1) {
    return numCurrent;
  }
  return numCurrent + numConcat;
};
