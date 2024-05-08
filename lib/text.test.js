const createText = require('./text.js');



//A testing to see if a shape is created
describe('Text content and color', () => {
  // A test is created to check that the out creates the code for an svg
  describe('Text color', () => {
    it('I should see the text in the proper color', () => {
      const correctTextColor = `<text x="150" y="95" font-size="60" text-anchor="middle" fill="red">baa</text>`;
      // const textOutput = createText("square", "baa", "blue")
      expect(createText("Square", "baa", "red")).toEqual(correctTextColor);
    });
  });  

  describe('Text shape not triangle', () => {
    it('I should see that the text is properly centered for all shapes except triangle', () => {
      const correctTextColor = `<text x="150" y="95" font-size="60" text-anchor="middle" fill="blue">baa</text>`;
     
      expect(createText("Circle", "baa", "blue")).toEqual(correctTextColor);
    });
  });

  describe('Text shape triangle', () => {
    it('I should see that the code fits within the bottom of the triangle', () => {
      const correctTextColor = `<text x="150" y="170" font-size="60" text-anchor="middle" fill="blue">baa</text>`;
      
      expect(createText("Triangle", "baa", "blue")).toEqual(correctTextColor);
    });
  });

});