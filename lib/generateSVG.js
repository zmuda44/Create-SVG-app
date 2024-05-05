let shapeFile = require("./shapes")
let createText = require("./text.js")
let Circle = require("./circle.js")
let squareFile = require("./square.js")
let RoundedSquare = require("./rounded-square.js")
let Triangle = require("./triangle.js")


function createLogo(data) {
 
  let text = createText(data.textChars, data.textColor)
  let shapeType
  let shape

  if (data.shape == "Circle") {
    shapeType = new Circle(data.shapeColor)
    // shape = shapeType.render()
  }
  if (data.shape == "Square") {
    shapeType = new squareFile(data.shapeColor)
    // shape = shapeType.render()
  }
  if (data.shape == "Rounded Square") {
    shapeType = new RoundedSquare(data.shapeColor)
    // shape = shapeType.render()
  }
  if(data.shape == "Triangle") {
    shapeType = new Triangle(data.shapeColor)
  }

  shape = shapeType.render()

  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
    ${shape} />
    ${text}
    </svg>`
}


  module.exports = createLogo
 