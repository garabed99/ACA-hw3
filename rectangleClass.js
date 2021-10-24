class Rectangle {
  constructor(length, width) {
    this.lengthRect = length;
    this.widthRect = width;
  }

  get length() {
    return this.lengthRect;
  }

  get width() {
    return this.widthRect;
  }

  set length(len) {
    this.lengthRect = len;
  }

  set width(wid) {
    this.widthRect = wid;
  }

  getArea() {
    return this.length * this.width;
  }

  getParameter() {
    return 2 * this.length * this.width;
  }

  toString() {
    return `length: ${this.length}, width: ${this.width}`;
  }
}
const rect1 = new Rectangle(3, 4);
console.log(rect1.getArea());
console.log(rect1.getParameter());
console.log(rect1.toString());