#! /usr/bin/env node
// Import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer";
// Declare a constant 'answer' and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentences",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answers.Sentences.trim().split(" ");
// Print the array of words to the console
console.log(words);
// Print the word count of the sentence to the console
console.log(`Your sentences word count is ${words.length}`);
