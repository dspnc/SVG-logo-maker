//package for reading/writing files
const fs = require('fs')
//package for taking in user input
const inquirer = require('inquirer')
//functions from package to validate that colors are valid hex or color names
const {validateHTMLColorHex, validateHTMLColorName} = require('validate-color')
//the 3 shape objects from shapes.js
const { Circle, Triangle, Square} = require('./lib/shapes.js')

//array of inquirer prompts with validation to make sure text is only 3 max chars and color inputs are valid
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
        validate: (input) => {
            if (validateHTMLColorHex(input) == true || validateHTMLColorName(input) == true) {
                return true;
            }
            else return 'Not a valid color name or hex value. Start over.';
            
        }
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
        validate: (input) => {
            if (validateHTMLColorHex(input) == true || validateHTMLColorName(input)) {
                return true;
            }
            else return 'Not a valid color name or hex value. Start over.';
            
        }
    },
  ];
  

//function to write finalized data to a file and log success or error
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 
    (err) => err ? console.error(err) : console.log("Generated logo.svg")
    );
}


//takes in the inquirer response data and determines which shape to create before producing the relevant HTML
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
        writeToFile(`./examples/${response.text}-logo.svg`, createLogo(response.text, response.textcolor, response.shape, response.shapecolor))
    )
}

init();
