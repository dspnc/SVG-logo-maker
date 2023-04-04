const fs = require('fs')
const inquirer = require('inquirer')
const { Circle, Triangle, Square} = require('./lib/shapes.js')

//array of inquirer prompts with validation
const questions = [
    {
        type: 'input',
        message: "What is the logo's text? ",
        name: 'text',
        validate: (input) => {
            if (input.length > 3) {
              return 'Logo can only contain max 3 characters. Start over.';
            }
            return true;
          }
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

//function to write finalized data to a file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 
    (err) => err ? console.error(err) : console.log("Generated logo.svg")
    );
}


//takes in the inquirer responses and determines which shape to create and produces the relevant HTML
function createLogo(text, textcolor, shape, shapecolor){
    switch(shape){
        case 'Circle':
            const circ = new Circle(text, textcolor, shapecolor);
            return circ.generateSVG();
        case 'Triangle':
            const tri = new Triangle(text, textcolor, shapecolor);
            return tri.generateSVG();
        case 'Square':
            const square = new Square(text, textcolor, shapecolor);
            return square.generateSVG();
    }
}


//starts up the prompts, takes responses and creates the logo before writing it to a file
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>
        //console.log(response)
        writeToFile('./examples/logo.svg', createLogo(response.text, response.textcolor, response.shape, response.shapecolor))
    )
}

init();
