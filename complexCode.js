/*
Filename: complexCode.js
Content: Complex and Elaborate JavaScript Code
*/

// Constants
const PI = 3.14159;
const MAX_VALUE = 1000;

// Objects
class Shape {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super("Circle", color);
    this.radius = radius;
  }

  getArea() {
    return PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height, color) {
    super("Rectangle", color);
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

// Functions
function printShapeInfo(shape) {
  console.log(`Shape: ${shape.name}`);
  console.log(`Color: ${shape.getColor()}`);
  console.log(`Area: ${shape.getArea()}`);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Variables
let shapes = [];
let totalArea = 0;

// Generate and print shapes
console.log("Generated Shapes:");
for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) {
    const circle = new Circle(getRandomNumber(1, 10), "Red");
    shapes.push(circle);
    totalArea += circle.getArea();
    printShapeInfo(circle);
  } else {
    const rectangle = new Rectangle(getRandomNumber(1, 10), getRandomNumber(1, 10), "Blue");
    shapes.push(rectangle);
    totalArea += rectangle.getArea();
    printShapeInfo(rectangle);
  }
}

console.log("Total Area:", totalArea);
console.log("Number of Shapes:", shapes.length);

// Additional Complex Operations
let maxAreaShape = null;
let minAreaShape = null;
let maxArea = -1;
let minArea = Number.MAX_VALUE;

for (let shape of shapes) {
  const area = shape.getArea();

  if (area > maxArea) {
    maxArea = area;
    maxAreaShape = shape;
  }

  if (area < minArea) {
    minArea = area;
    minAreaShape = shape;
  }
}

console.log("Shape with Maximum Area:");
printShapeInfo(maxAreaShape);
console.log("Shape with Minimum Area:");
printShapeInfo(minAreaShape);