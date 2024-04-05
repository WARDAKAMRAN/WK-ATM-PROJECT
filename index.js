#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// intialize user blance qnd pin codde
let myBlance = 8000;
let myPin = 1234;
//print welcome message
console.log(chalk.blue("\n \twelcome to code with Warda - ATM Machine\n"));
let pinAnswer = await inquirer.prompt([
    { name: "pin",
        message: "Enter your pin code",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is correct, Login Successfully!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select an operation",
            type: "list",
            choices: ["Withdarw Amount", "Check Blance"]
        }
    ]);
    if (operationAns.operation === "Withdarw Amount") {
        let WithdarwAns = await inquirer.prompt([
            {
                name: "WithdarwMethod",
                message: "Select a WithdarwMethod ",
                type: "list",
                choices: ["Fast Cash", "Enter amount"]
            }
        ]);
        if (WithdarwAns.WithdarwMethod === "Fast Cash") {
            let FastCashAns = await inquirer.prompt([
                {
                    name: "FastCash",
                    type: "list",
                    message: "Select Amount",
                    choices: [500, 1000, 2000, 5000, 10000, 15000, 20000, 25000]
                }
            ]);
            if (FastCashAns.FastCash > myBlance) {
                console.log("Insufficient Blance");
            }
            else {
                myBlance -= FastCashAns.FastCash;
                console.log(`your Reamaing Blance is: ${myBlance}`);
                console.log(`${FastCashAns.FastCash} Withdarw Successfully`);
            }
        }
        else if (WithdarwAns.WithdarwMethod === "Enter amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter the amount to Withdarw",
                    type: "number",
                }
            ]);
            if (amountAns.amount > myBlance) {
                console.log("Insufficient Blance");
            }
            else {
                myBlance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdarw Successfully`);
                console.log(`your Remaining Blance is: ${myBlance}`);
            }
        }
        else if (operationAns.operation === "Check Blance") {
            console.log(`Your Account Blance is: ${myBlance}`);
        }
    }
}
else {
    console.log("pin is Incorrect, Try Again!");
}
