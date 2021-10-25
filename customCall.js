Function.prototype.customCall = function (thisArg, ...args) {
    const key = Math.floor(Math.random() * Date.now());

    thisArg[key] = this;

    const result = thisArg[key](...args);
    delete thisArg;
    return result;  
};

function Product(name, price) {
    this.name = name;
    this.price = price;
}
  
function Food(name, price) {
    Product.customCall(this, name, price);
    this.category = 'food';
}
  
console.log(new Food('cheese', 5).name);  // expected output: "cheese"