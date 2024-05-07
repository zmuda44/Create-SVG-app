
const createText = require('./text.js');



//A testing to see if a shape is created
describe('Check text position depending on shape', () => {
  // A test is created to check that the out creates the code for an svg
  describe('Triangle', () => {
    it('I should see the text move if it is a triangle', () => {
      const correctPosition = `<circle cx="150" cy="100" r="80" fill="blue" />`;
      const shape = new Circle("blue")
      expect(shape.render()).toEqual(correctShape);
    });
  });  

  describe('Blue Square', () => {
    it('I should see that the code matches to create the correct shape with the correct color', () => {
      const correctShape = `<rect x="70" y="30" width="150" height="150" fill="blue"/>`;
      const shape = new Square("blue")
      expect(shape.render()).toEqual(correctShape);
    });
  });

  describe('Yellow RoundedSquare', () => {
    it('I should see that the code matches to create the correct shape with the correct color', () => {
      const correctShape = `<rect x="70" y="30" rx="20" ry="20" width="150" height="150" fill="yellow"/>`;
      const shape = new RoundedSquare("yellow")
      expect(shape.render()).toEqual(correctShape);
    });
  });

  describe('Red Triangle', () => {
    it('I should see that the code matches to create the correct shape with the correct color', () => {
      const correctShape = `<polygon points="150, 18 244, 182 56, 182" fill="red" />`;
      const shape = new Triangle("red")
      expect(shape.render()).toEqual(correctShape);
    });
  });
});