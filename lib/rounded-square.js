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