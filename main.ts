#!  /usr/bin/env node
import inquirer from "inquirer";

const currency :any = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
};
let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter from currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "to",
    message: "Enter from currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "amount",
    message: "Enter from currency",
    type: "number",
  },
]);
 let fromamount = currency[user_answer.from] //exchange rate
 let toamount = currency[user_answer.to] //exchange rate
 let amount = user_answer.amount
 let baseAmount = amount / fromamount //USD base currency 
 let convertedAnount = baseAmount* toamount
 console.log(convertedAnount);

 