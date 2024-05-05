//Create the 3 letters and color of letters that go inside logo or return error
function createText (text, color) {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
  }

  module.exports = createText;