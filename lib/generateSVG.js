const { Circle, Square, RoundedSquare, Triangle } = require("./shapes")
let createText = require("./text.js")


function createLogo(data) {
  let text = createText(data.shape, data.textChars, data.textColor)
  let shapeType
  let shape 

  if (data.shape == "Circle") {
    shapeType = new Circle(data.shapeColor)
    
  }
  if (data.shape == "Square") {
    shapeType = new Square(data.shapeColor)    
  }
  if (data.shape == "Rounded Square") {
    shapeType = new RoundedSquare(data.shapeColor)
  }
  if(data.shape == "Triangle") {
    shapeType = new Triangle(data.shapeColor)
  }

  shape = shapeType.render()

  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape}
    ${text}
    </svg>`
}


  module.exports = createLogo
 