//jest test needed for each shape
const { Circle } = require('./shapes')

describe('Check if obj Circle can be created', () => {
    test('will this return an obj', () => {
        const circle = new Circle(0, 1, 2)
        expect(circle.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="0" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="1">2</text>
      
      </svg>`)
    })
})
//Below was the example test given. Should pass
// const shape = new Triangle();
// shape.setColor("blue");

// expect(shape.render()).toEqual('<polygon points = "150, 18 244, 182 56, 182" fill = "blue" />');