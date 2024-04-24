#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random number

// 2) User input for guessing number

// 3) Compare user input with computer number and show result - done

 const randomNumber = Math.floor(Math.random() * 5 + 1);
 
 const answers = await inquirer.prompt([
   {
    name: "userGuessedNumber",
    type: "number",
     message: "Please guess a number (Number Limit from 1 to 5):",
   },
 ]);

 if (answers.userGuessedNumber === randomNumber) {
   console.log("Congratulations ! You guess a correct number.");
 } else {
  console.log("Sorry,you guess a wrong number");
 }