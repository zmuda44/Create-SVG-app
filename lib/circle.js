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