let shapeFile = require("./shapes")
let textFile = require("./text.js")

const shapeOne = new Triangle()
shapeOne.setColor("blue")
console.log(shapeOne)




function createLogo(data) {
 
  let text = textFile(data.textChars, data.textColor)
  let shape = shapeFile(data.shape, data.shapeColor)

  console.log(text)
  console.log(shape)
    
   
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
    ${shape} />
    ${text}
    </svg>`
}

  module.exports = createLogo
 