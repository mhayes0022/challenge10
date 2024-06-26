//exports triangle, circle, square, and shape classes
class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor
        this.textColor = textColor
        this.text = text
    }

}

class Circle extends Shape {

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="115" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="130" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`;
    }
};

class Triangle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />

        <text x="150" y="130" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

      </svg>`;
    }
};

class Square extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect width="160" height="160" x="73" y="40" cx="150" fill="${this.shapeColor}" />

        <text x="150" y="130" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

      </svg>`;
    }
};



module.exports = { Circle, Triangle, Square };