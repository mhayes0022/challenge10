//runs the application w/ input from .lib/
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require("./lib/shapes.js");


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please input up to three characters',
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

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log(error);
        }
        else {
            console.log("Generated logo.svg");
        }
    })
};

const answers = await inquirer.prompt(questions);

//Going to need to write an html file to put logo into?