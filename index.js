#! /usr/bin/env node 
import inquirer from "inquirer";
// Declare a constant 'answer' and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: ",
    }
]);
const words = answers.Sentence.trim().split(" ");
// Print the array of words to console
console.log(words);
// Print the word count of the sentance to the console
console.log(`Your Sentence word count is ${words.length}`);
