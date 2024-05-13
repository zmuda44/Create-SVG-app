//Create shape class to be used as parent class of each shape
    
class Shape {
  constructor(shape, color) {
      this.shape = shape;
      this.color = "";
      function setColor(color) {
        this.color = color;
    }    
  }   
}

class Circle extends Shape {
  constructor(color) {
    super(color)
    this.shape = "Circle";
    this.color = color;
  }
  render() {
    return `<circle cx="150" cy="105" r="80" fill="${this.color}" />`
  }
}

class Square extends Shape {
  constructor(color) {
    super(color)
    this.shape = "Square";
    this.color = color;
  }
  render() {
    return `<rect x="75" y="30" width="150" height="150" fill="${this.color}"/>`
  }
} 

class RoundedSquare extends Shape {
  constructor(color) {
    super(color)
    this.shape = "Rounded Square";
    this.color = color;
  }
  render() {
    return `<rect x="75" y="30" rx="20" ry="20" width="150" height="150" fill="${this.color}"/>`
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

console.log()

  module.exports = { Circle, Square, RoundedSquare, Triangle }







  
  












