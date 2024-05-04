const shapes = require('./shapes');
const indexJS = require('../index')

// A testing for a shape is created
describe('text color match', () => {
  // A test is created to check that the shape color matches
  describe('text color match', () => {
    it('should take a text color and see if matches', () => {
      const color = "f";
      const colorMatch = new shapes();
      expect(indexJS.data.shapeColor).toEqual(color);
    });
  });
});