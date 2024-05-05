const Shape = require("./shapes")

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

module.exports = Square
