
const { Triangle, Square, Circle } = require("./shapes");

describe("Test the triangle", () => {
    test("testing for a green triangle", () => {
      const shape = new Triangle();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
      );
    });
  });

  describe("Test the square", () => {
    test("testing for a red square", () => {
      const shape = new Square();
      shape.setColor("red");
      expect(shape.render()).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="red" />'
      );
    });
  });

  describe("Test the circle", () => {
    test("testing for a yellow circle", () => {
      const shape = new Circle();
      shape.setColor("#yellow");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="#yellow" />'
      );
    });
  });