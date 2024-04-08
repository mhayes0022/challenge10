//runs the application w/ input from .lib/
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require("./lib/shapes.js");


//Below are the questions for the parameters of the logo
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please input up to three characters',
        validate: checkTextInput,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like those characters to be?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape:',
        choices: ['Triangle', 'Square', 'Circle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape to be?',
    },
];

//
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log(error);
        }
        else {
            console.log("logo.svg generated");
        }
    })
};


//Below takes user responses and inserts it into the correct shape class 
async function createLogo() {
    const answers = await inquirer.prompt(questions);
    checkTextInput(answers.text);
    let logo;

    if (answers.shape === "Triangle") {
        logo = new Triangle(answers.text, answers.textColor, answers.shapeColor);
    }
    else if (answers.shape === "Circle") {
        logo = new Circle(answers.text, answers.textColor, answers.shapeColor);
    }
    else {
        logo = new Square(answers.text, answers.textColor, answers.shapeColor);
    }

    const svgString = logo.render();
    writeToFile('logo.svg', svgString);
    console.log('Generating logo.svg')
};


//Below ensures user can't input more than three characters, or 0
function checkTextInput(input) {
    if (input.length < 1 || input.length > 3) {
        return 'Please enter between one and three characters.';
    }
    return true;
}


createLogo();

