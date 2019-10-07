const calculate = require('./calculate')

const num1 = process.argv[2]
const operator = process.argv[3]
const num2 = process.argv[4] 

const result = calculate(num1, num2, operator);
console.log(result);