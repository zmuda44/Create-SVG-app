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