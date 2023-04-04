const {Circle, Triangle, Square} = require('./shapes.js');

// A testing suite for Shapes is created.
describe('Shapes', () => {
    // A test is created to check that the setColor function properly assigns a color
    //and tests the render function to make sure it generates a string that describes an SVG circle
    describe('Circle', () => {
      it('should generate the SVG code for a circle with a setColor', () => {
        const renderBlueCirc = `<circle cx="150" cy="100" r="100" fill="blue" />`;
        const circ = new Circle();
        circ.setColor('blue')
        expect(circ.render()).toEqual(renderBlueCirc);
      });
    });
  });

  describe('Shapes', () => {
    // A test is created to check that the setColor function properly assigns a color
    //and tests the render function to make sure it generates a string that describes an SVG triangle
    describe('Triangle', () => {
      it('should generate the SVG code for a triangle with a setColor', () => {
        const renderBlueTri = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`;
        const tri = new Triangle();
        tri.setColor('blue')
        expect(tri.render()).toEqual(renderBlueTri);
      });
    });
  });

  describe('Shapes', () => {
    // A test is created to check that the setColor function properly assigns a color
    //and tests the render function to make sure it generates a string that describes an SVG square
    describe('Square', () => {
      it('should generate the SVG code for a square with a setColor', () => {
        const renderBlueSq = `<rect width="200" height="200" fill="blue" />`;
        const square = new Square();
        square.setColor('blue')
        expect(square.render()).toEqual(renderBlueSq);
      });
    });
  });
  