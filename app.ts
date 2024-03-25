#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "FirstNumber" },
  { message: "Enter second number", type: "number", name: "SecondNumber" },
  {
    message: "select the operator from the given",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

 // Conditional Statement
if (answer.operator === "Addition") {
  console.log(answer.FirstNumber + answer.SecondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.FirstNumber - answer.SecondNumber);
} else if (answer.operator === "Multiplcation") {
  console.log(answer.FirstNumber * answer.SecondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.FirstNumber / answer.SecondNumber);
} else {
  console.log("please select the correct operator");
}
