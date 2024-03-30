#! usr/bin/env node
import inquirer from "inquirer";
console.log("Wellcome To - Cli Number Guessing Game");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter A Guess Number Between 1-5 ?",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Yes ! You Guess A Correct Number", `${randomNumber}`);
}
else {
    console.log("You Guess A Wrong Number");
}
