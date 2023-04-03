const fs = require('fs')
const inquirer = require('inquirer')

const questions = [
    {
        type: 'input',
        message: "What is the logo's text? ",
        name: 'text',
    },
    {
        type: 'input',
        message: 'What should the text color be? ',
        name: 'textcolor',
    },
    {
        type: 'list',
        message: 'Please choose a shape for the logo: ',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        message: 'What should the shape color be? ',
        name: 'shapecolor',
    },
  ];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, ##callbackfunction(data), 
    (err) => err ? console.error(err) : console.log('Success!')
    );
}


function init() {
    inquirer
    .prompt(questions)
    .then((response) =>
        writeToFile('logo.svg', response)
    )
}

init();
