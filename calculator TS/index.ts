import inquirer from "inquirer";
import chalk from "chalk";
enum Operator{
    ADD = "Addition",
    SUBTRACT = "subtraction",
    MULTIPLY = "multiply",
    DIVIDE = "Dividion"
}

function validateNum(input:string):boolean|string{
    if(isNaN(parseFloat(input))){
        return "please enter a vaid number";
    }
    return true;
} 

const prompt = inquirer.createPromptModule();

async function main() {
    
 const input = await prompt([
    
    { 
        type: "input",
        name: "num1",
        message:chalk.gray.bgCyan("Enter the First Number:"), 
        validate: validateNum,
    },
    {
     type:"list",
     name:"operator",
     message:chalk.greenBright.bgGrey("What do you want to do?"),
     choices: Object.values(Operator),
    },
    {
        type: "input",
        name: "num2",
        message:chalk.blue.bgCyan("Enter the second Number:"), 
        validate: validateNum,
    },     
 
])

const num1 = parseFloat(input.num1);
const num2 = parseFloat(input.num2);
const SelectedOperator = input.operator as Operator;
let result:number;
if(SelectedOperator ===Operator.ADD){
    result = num1+num2;
  console.log(chalk.yellow( ` Result :${result}`)); 
} 
if(SelectedOperator ===Operator.DIVIDE){
    result = num1/num2;
    console.log(chalk.yellow( ` Result :${result}`)); 
}
if(SelectedOperator ===Operator.MULTIPLY){
    result = num1*num2;
    console.log(chalk.yellow( ` Result :${result}`)); 
}
if(SelectedOperator ===Operator.SUBTRACT){
    result = num1-num2;
    console.log(chalk.yellow( ` Result :${result}`)); 
}
}

    main()
