#! /usr/bin/env node

import inquirer  from "inquirer";
import chalk from "chalk";

// // Initiative user balance and pin code
let myBalance = 10000; 
let myPin = 1234;

// Print welcome message
console.log(chalk.greenBright("\n \tHello Areeba, welcome to the ATM\n"));

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.yellowBright( "Enter your pin code:"),
        type: "number",
    },
]);
if (pinAnswer.pin === myPin){
     console.log(chalk.bgGray("\nPin is Correct, Login Successfully!\n"));
    let operationAns = await inquirer.prompt([
            {
               name: "operation",
               message: chalk.magenta("Select any one of the operations:"),
               type: "list",
               choices: ["Withdraw Amount","Check Balance","Fast Cash"],
            }
    ])
    if (operationAns.operation  === "Withdraw Amount"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.blackBright("Enter the amount to withdraw:"),
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance){
            console.log(chalk.red("Insufficient Balance"));
        }
        else{
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    } else if (operationAns.operation === "Check Balance"){
        console.log(`Your Account Balance is: ${myBalance}`);
    } else if (operationAns.operation === "Fast Cash"){
        let fastCasherAns = await inquirer.prompt([
           {
            name: "fastCash",
            message: chalk.bgGreenBright("Please select your ammount:"),
            type: "list",
            choices:[1000,2000,5000,10000,50000],
           } 
        ]);
    if (fastCasherAns.fastCash > myBalance){
        console.log("Insufficient Balance");
    }
    else {
        myBalance -= fastCasherAns.fastCash
        console.log(`${fastCasherAns.fastCash} withdraw Successfully`);
        console.log(`Your Remaining Balance is: ${myBalance}`);
    };
};
}else{
     console.log(chalk.red("Pin is Incorrect, Try Again!"));
 };
