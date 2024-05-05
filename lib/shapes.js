

//Create shape and color of shape that make up the logo
function createShape (shape, color) {
  class Shape {
    constructor(shape, color) {
      this.shape = shape;
      this.color = color;
    } 
    setColor(color) {
      return color
    }   
  }

  class Circle extends Shape {
    constructor(color) {
      super(color)
      this.shape = "Circle";
      this.color = color;
    }
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${color}" />`
      // return color
    }
  }

  class Square extends Shape {
    constructor(color) {
      super(color)
      this.shape = "Square";
      this.color = color;
    }
    render() {
      return `<rect x="70" y="30" width="150" height="150" fill="${this.color}"/>`
    }
  } 

  class RoundedSquare extends Shape {
    constructor(color) {
      super(color)
      this.shape = "Rounded Square";
      this.color = color;
    }
    render() {
      return `<rect x="70" y="30" rx="20" ry="20" width="150" height="150" fill="${this.color}"/>`
    }
  }

  class Triangle extends Shape {
    constructor(color) {
      super(color)
      this.shape = "Triangle";
      this.color = color;
    }
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
  }

  
  
  if (shape == "Circle") {
    const circle = new Circle(color)
    return circle.render()
  }
  else if (shape == "Square" ) {
    const square = new Square(color)
    return square.render()
  }
  else if (shape == "Rounded-Square") {
    const roundedSquare = new Square(color)
    return roundedSquare.render()
  }
  else if (shape == "Triangle") {
    const triangle = new Triangle(color)
    return triangle.render()
  }
}
  

module.exports = createShape;









/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="green" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */