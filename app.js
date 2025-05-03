const path = require("path");
const colors = require("colors");
const calculator = require("./my_module/calculator.js");

console.log("Current file: ".blue, path.basename(__filename).bgYellow);

console.log("Enter two numbers seperated by a space: ".red);

process.stdin.setEncoding("utf-8");

process.stdin.on("data", (input) => {
  const [a, b] = input.trim().split(" ").map(Number);

  //Addition with Green colored output
  console.log(
    "Addition".green,
    calculator.calculatorFunction(a, b, "addition")
  );

  //Subtraction with red colored output
  console.log(
    "Subtraction".red,
    calculator.calculatorFunction(a, b, "subtraction")
  );

  //Division with yellow colored output
  console.log(
    "Division".yellow,
    calculator.calculatorFunction(a, b, "division")
  );

  //Multiplication with amber colored output
  console.log(
    "Multiplication".blue,
    calculator.calculatorFunction(a, b, "multiplication")
  );

  process.exit();
});
