Function.prototype.customApply = function (thisArg, args) {
    const key = Math.floor(Math.random() * Date.now());
    
    if(this === null || this === undefined) {
        thisArg[key] = "null/undefined detected";
    }
    
    else thisArg[key] = this;

    const result = thisArg[key](...args);
    delete thisArg;
    return result;

}

const numbers = [5, 6, 2, 3, 7];
const max = Math.max.customApply(null, numbers);
console.log(max); // expected output: 7

const min = Math.min.customApply(null, numbers);
console.log(min); // expected output: 2
