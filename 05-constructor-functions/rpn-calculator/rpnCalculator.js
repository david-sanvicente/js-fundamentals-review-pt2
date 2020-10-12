/* eslint-disable no-unused-vars, no-throw-literal*/
function RPNCalculator(){
    this.nums = [];
}

RPNCalculator.prototype.push = function (num) {
    this.nums.push(num)
}

RPNCalculator.prototype.popCompute = function (operationFunc) {
    if(this.nums.length < 2){throw 'rpnCalculatorInstance is empty'}
    let num1 = this.nums.pop();
    let num2 = this.nums.pop();

    let result = operationFunc(num1, num2)
    this.push(result)
}

RPNCalculator.prototype.value = function () {
    return this.nums[this.nums.length - 1]
}

RPNCalculator.prototype.plus = function () {
    this.popCompute((first, second) => first + second); 
}

RPNCalculator.prototype.minus = function () {
    this.popCompute((first, second) => second - first);
}

RPNCalculator.prototype.times = function () {
    this.popCompute((first, second) => first * second)
}

RPNCalculator.prototype.divide = function () {
    this.popCompute((first, second) => second / first)
}