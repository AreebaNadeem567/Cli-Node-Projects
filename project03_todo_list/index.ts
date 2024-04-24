#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todos: string[] = [];
let condition = true;

console.log(chalk.magenta.bold("\n \t Wellcome to Areeba Nadeem -Todo-List Application \n \t"));
 
while(condition){
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "Select an option you want to do:",
            choices: ["Add Task", "Update Task", "View", "Delete Task", "Exit"],
        }
    ])

if(ans.select === "Add Task"){
    let addTodo = await inquirer.prompt({
        name: "todo",
        type: "input",
        message: "Add items in the list:",
        validate: function (input) {
            if(input.trim() == ""){
                return "Please enter a non-empty item."
            }
            return true;
        }
    })
    if(addTodo.todo.trim() !== ""){
    todos.push(addTodo.todo);
    todos.forEach(todo => console.log(todo)
) 
}
}

if(ans.select === "Update Task"){
    let updateTodo = await inquirer.prompt({
        name: "todo",
        type: "list",
        message: "Select item for update:",
        choices:todos.map(item => item)
    })
    let addTodo = await inquirer.prompt({
        name: "todo",
        type: "input",
        message: "Add items in the list:",
    })
    let index = todos.indexOf(updateTodo.todo);
    todos[index] = addTodo.todo;
    todos.forEach(todo => console.log(todo)
)
}

if(ans.select === "View"){
   console.log("***** To-Do List *****");
   todos.forEach(todo => console.log(todo)
)
}

if(ans.select === "Delete Task"){
    let deleteTodo = await inquirer.prompt({
        name: "todo",
        type: "list",
        message: "Select item to delete:",
        choices:todos.map(item => item)
    })
    let newTodo = todos.filter(val => val !== deleteTodo.todo);
    todos = [...newTodo];
    todos.forEach(todo => console.log(todo)
)
}

 if(ans.select === "Exit"){
    console.log("Exiting program...");
    condition = false;
 }
 }
