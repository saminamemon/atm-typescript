import inquirer from "inquirer";
import chalk from "chalk";
let answers = await inquirer.prompt([{
        type: "input",
        name: "username",
        message: chalk.redBright("kindly enter your name:")
    },
    {
        type: "input",
        name: "userid",
        message: chalk.yellowBright("Kindly enter your id:")
    },
    {
        type: "number",
        name: "userpin",
        message: chalk.bgBlackBright("Kindly enter your pin:")
    },
    {
        type: "list",
        name: "transcactionType",
        choices: ["fashcash", "withdraw"],
        message: chalk.bgBlueBright("select your  transaction:")
    },
    {
        type: "list",
        name: "accountType",
        choices: ["current", "saving"],
        message: chalk.overline("select your  account Type:")
    },
    {
        type: "list",
        name: "amount",
        choices: [3000, 5000, 10000, 15000],
        message: chalk.greenBright("select your  Amount:")
    },
    {
        type: "number",
        name: "amount",
    },
]);
if (answers.userid && answers.userpin) {
    const balance = 100000;
    console.log("previous balance", balance);
    const enteredamount = answers.amount;
    if (balance >= enteredamount) {
        const remaining = balance - enteredamount;
        console.log(chalk.redBright.bold("Your Remaining Balance is"), remaining);
    }
    else {
        console.log("Insufficient Balance");
    }
}
