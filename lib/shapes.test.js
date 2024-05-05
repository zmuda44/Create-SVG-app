// const Circle = require('./shapes');
// const Square = require('./shapes');
// const RoundedSquare = require('./shapes');
// const Triangle = require('./shapes');
// const createShape = require('./shapes');
let createShapeFile = require('./shapes');
let createShape = createShapeFile()

console.log(createShapeFile) 

// const shapes = require('./shapes');
// const indexJS = require('../index')

// A testing to see if a shape is created
// describe('shape created', () => {
//   // A test is created to check that the out creates the code for an svg
//   describe('shape created', () => {
//     it('I should see that the code matches the proper code to create an SVG', () => {
//       const shapeCorrect = `<circle cx="150" cy="100" r="80" fill="blue" />`;
//       const shape = new Square();
//       shape.setColor("blue")
//       expect(shape.render()).toEqual(shapeCorrect);
//     });
//   });
// });