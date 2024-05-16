# Generate logo app

  ## License: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [MIT License](https://opensource.org/licenses/MIT)

  ## Table of Contents
  * [Description](#description)
  * [Tutorial Video](#tutorial)
  * [Installation Instructions](#installation)
  * [Usage Instructions](#usage)
  * [Contribution Information](#contributions)
  * [Test Information](#testing)
  * [Questions](#questions)
  
  ## Description: 
  This app will create an SVG logo based on user input to questions in the command line. If the user does not enter exactly 3 letters in the logo, an error will be displayed and the svg will not be created. The SVG will titled logo.svg upon creation.

  ## Tutorial:
  https://www.youtube.com/watch?v=yd7WrcIPaNA&t=21s

  ## Installation: 
  First, clone this repository to your computer using 'git clone git@github.com:zmuda44/Create-SVG-app.git' or 'git clone https://github.com/zmuda44/Create-SVG-app.git'. cd into the folder containing the index.js. Run 'npm i' from the command line to create your node modules. A package.json will be cloned with all proper dependencies. 

  ## Usage: 
  To use app, run 'node index.js' from the command line in the folder containing your index.js. You will be prompted for a series of questions. The first question must be only 3 characters long. If any number of letters other than 3 is entered, an error will be displayed in the command line and SVG will not be created. Colors for both text and shape can either be a color name or a hexidecimal number, but be sure to include the # before the number. An svg logo will be created in the folder containing the index.js and can be used as you see fit.

  ## Contributions: 
  Contributions to this app are welcome. Simply fork the repository to your github account by pressing the fork button above.  This will create a repository on your own github which you can clone and push to like any other repository. If you wish for your changes or additions to be part of this app, click on the 'Pull requests' button towards the top of the forked repository in your github account. Follow the prompts for a pull request and if approved, your code will be accepted into this app's repository.

  ## Testing: 
  You can test this code or any modified code after cloning or forking using JEST. The package.json cloned from this repository will have jest as both a dependency and a script, so nothing should need to be added. When you run 'npm i', as mentioned above, all proper modules should be downloaded. If you experience any problems, install JEST by typing 'npm i jest' from the command line while in the folder containing index.js. If not included, be sure to add test to your "scripts" in your package.json folder. Add the following code into your "scripts" key so it should read as follows: "scripts": { "test": "jest"}. In addition, the package.json is also set up to run an individual test on the shapes only. Type 'npm run test:single' in the command line to run only that test. To run all tests type 'npm run test'. Tests have already been created on both the shapes and text and can be found in the lib folder as shapes.test.js and text.test.js. Use these files as an example and feel free to set up your own tests for any modified code.  

  ## Questions: 
  Github: [github.com/zmuda44](https://github.com/zmuda44) Email: gregbailey617@gmail.com


 