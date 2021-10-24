class Author {
  constructor(name, email, gender) {
    this.authName = name;
    this.authEmail = email;
    this.authGender = gender;
  }

  get name() {
    return this.authName;
  }

  get email() {
    return this.authEmail;
  }

  get gender() {
    return this.authGender;
  }

  set name(name) {
    this.authName = name;
  }

  set email(email) {
    this.authEmail = email;
  }

  set gender(gender) {
    this.authGender = gender;
  }

  toString() {
    return `Author name: ${this.authName}, email: ${this.authEmail}, gender: ${this.authGender}`;
  }
}

class Book extends Author {
  constructor(title, name, email, gender, price, quantity) {
    super(name, email, gender);
    this.auth = name;
    this.bookTitle = title;
    this.bookPrice = price;
    this.bookQuantity = quantity;
  }

  get title() {
    return this.bookTitle;
  }

  get price() {
    return this.bookPrice;
  }

  get quantity() {
    return this.bookQuantity;
  }

  set title(titleName) {
    this.bookTitle = titleName;
  }

  set price(amount) {
    this.bookPrice = amount;
  }

  set quantity(num) {
    this.bookQuantity = num;
  }

  getProfit() {
    return this.bookPrice * this.bookQuantity;
  }

  toString() {
    return `title: ${this.bookTitle}, author: ${this.auth}, price: ${this.bookPrice}, quantity: ${this.bookQuantity}`;
  }
}

const auth1 = new Author("Garabed Baghsarian", "gb@gmail.com", "Male");
const book1 = new Book(
  "New Book",
  "Garabed Baghsarian",
  "gb@gmail.com",
  "Male",
  20,
  100
);

//tests output
console.log(book1.auth);
console.log(auth1.toString());
console.log(book1.toString());
console.log("profit: " + book1.getProfit());
