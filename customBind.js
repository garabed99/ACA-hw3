Function.prototype.customBind = function (thisArg, ...args) {
  return (...args) => {
    const key = Math.floor(Math.random() * Date.now());

    if (this === null || this === undefined) {
      thisArg[key] = "null/undefined detected";
    } else thisArg[key] = this;

    const result = thisArg[key](...args.concat(args));
    delete thisArg[key];
    return result;
  };
};

const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.customBind(module);
console.log(boundGetX()); // expected output: 42
