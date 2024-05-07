//Create the 3 letters and color of letters that go inside logo or return error
function createText (shape, text, color) {
  if (shape == "Triangle") {
    return `<text x="150" y="170" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
  }
  
  return `<text x="150" y="95" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
}

  module.exports = createText;