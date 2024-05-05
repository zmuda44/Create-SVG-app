let shapeFile = require("./shapes")
let textFile = require("./text.js")
let text = textFile(data.textChars, data.textColor)
let shape = shapeFile(data.shape, data.shapeColor)



function createLogo(shape, text) {

    
    console.log(shape)
    // console.log(text)
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
    ${shape} />
    ${text}
    </svg>`
  }

  module.exports = createLogo
 createLogo()