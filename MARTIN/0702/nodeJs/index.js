const connect = require('./module1');
const calculator = require('./module2');
const {add, subtract, multiply} = require('./module2') // 모듈2 객체구조분해


// 모듈 1
// console.log(connect());
const result = connect();
console.log(result);

// 모듈2
console.log(calculator.add(1, 3));
console.log(calculator.subtract(6, 3));
console.log(calculator.multiply(5, 8));
// 모듈2 객체구조분해
console.log('더하기', add(5, 6));
console.log('빼기', subtract(10, 2));
console.log('곱하기', multiply(6, 7));

const a = 10;
console.log(add(a, 10));