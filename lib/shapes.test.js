//jest test needed for each shape
const { Circle, Triangle, Square } = require('./shapes')

//Below is the test for Circle
describe('Check if obj Circle can be created', () => {
    test('will this return an obj', () => {
        const circle = new Circle(0, 1, 2)
        expect(circle.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="115" r="80" fill="0" />
      
        <text x="150" y="130" font-size="50" text-anchor="middle" fill="1">2</text>
      
      </svg>`)
    })
});

//Below is the test for Triangle
describe('Check if obj Triangle can be created', () => {
    test('will this return an obj', () => {
        const triangle = new Triangle(0, 1, 2)
        expect(triangle.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="0" />

        <text x="150" y="130" font-size="50" text-anchor="middle" fill="1">2</text>
      
      </svg>`)
  })
});

//Below is the test for Square
describe('Check if obj Square can be created', () => {
  test('will this return an obj', () => {
      const square = new Square(0, 1, 2)
      expect(square.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect width="160" height="160" x="73" y="40" cx="150" fill="0" />
    

        <text x="150" y="130" font-size="50" text-anchor="middle" fill="1">2</text>
    

      </svg>`)
  })
});


