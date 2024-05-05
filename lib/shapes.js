//Create shape and color of shape that make up the logo
// function createShape (shape, color) {
   
  class Shape {
    constructor(shape, color) {
      this.shape = shape;
      this.color = color;
    } 
    setColor(color) {
      return color
    }   
  }

  







  
  
  // if (shape == "Circle") {
  //   const circle = new Circle(color)
  //   return circle.render()
  // }
  // else if (shape == "Square" ) {
  //   const square = new Square(color)
  //   return square.render()
  // }
  // else if (shape == "Rounded-Square") {
  //   const roundedSquare = new RoundedSquare(color)
  //   return roundedSquare.render()
  // }
  // else if (shape == "Triangle") {
  //   const triangle = new Triangle(color)
   
  //   return triangle.render()
  // }
// }
  

module.exports = Shape;









/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="green" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */