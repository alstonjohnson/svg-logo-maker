
const { Triangle, Square, Circle } = require("./shapes");

describe("Test the triangle", () => {
    test("test for a triangle with a green background", () => {
      const shape = new Triangle();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
      );
    });
  });