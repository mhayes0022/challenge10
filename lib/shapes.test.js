//jest test needed for each shape

//Below was the example test given. Should pass
const shape = new Triangle();
shape.setColor("blue");

expect(shape.render()).toEqual('<polygon points = "150, 18 244, 182 56, 182" fill = "blue" />');