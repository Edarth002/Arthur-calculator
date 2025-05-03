//Calculator Logic function

export default function calculatorFunction(a, b, operation) {
  let input1 = parseFloat(a);
  let input2 = parseFloat(b);
  let operation = toString(operation);

  switch (operation) {
    case "addition":
      let sum = input1 + input2;
      return sum;
      break;

    case "subtraction":
      let subtraction = input1 - input2;
      return subtraction;
      break;

    case "division":
      let division = input1 / input2;
      return division;
      break;

    case "multiplication":
      let multiplication = input1 * input2;
      return multiplication;
      break;

    default:
      return "Operation does not exist; enter Addition, Subtraction, division, or multiplication";
      break;
  }
}
