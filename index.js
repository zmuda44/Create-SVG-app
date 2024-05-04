const fs = require("fs")
const inquirer = require("inquirer")
const createLogo = require("./lib/shapes.js")

const input = [
  {
    type: "input",
    message: "Enter 3 letters of your logo",
    name: "letters",
  },
  {
    type: "input",
    message: "Enter color name or hexical number of color for your text",
    name: "textColor",
  },
  {
    type: 'list',
      message: 'Choose the shape of your logo.',
      name: 'shape',
      choices: [
          { value: 'Circle' },   
          { value: 'Square' },  
          { value: 'Triangle' },               
      ]
  },
  {
    type: "input",
    message: "Enter color name or hexical number of color for your shape",
    name: "shapeColor",
  }, 
];

//Create SVG file from responses given
function writeToFile(fileName, data) {
  // console.log(data)
  fs.writeFile(fileName, createLogo(data), (err) =>
  err ? console.error(err) : console.log("Generated logo.svg"))
}

//Function to initialize app
function init() {
  inquirer
  .prompt(input)
  .then((response) => {    
    const fileName = "output.svg";
    writeToFile(fileName, response);
    }
  );
}

// Function call to initialize app
init();