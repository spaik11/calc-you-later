const num1 = process.argv[2]
const operator = process.argv[3]
const num2 = process.argv[4] 

function calculate(num1, num2, operator) {
    const convertNum1 = Number(num1);
    const convertNum2 = Number(num2);
    switch (operator) {
        case '+':
        case 'plus':
        result = convertNum1 + convertNum2;
        console.log(result);
        break;
    
        case '-':
        case 'minus':
        result = convertNum1 - convertNum2;
        console.log(result);
        break;
    
        case 'x':
        case 'X':
        case 'times':
        result = convertNum1 * convertNum2;
        console.log(result);
        break;
    
        case '/':
        result = convertNum1 / convertNum2;
        console.log(result);
        break;

        case '%':
        case 'mod':
        case 'modulus':
        result = convertNum1 % convertNum2;
        console.log(result);
        break;

        default: return 'Sorry, that\'s not a mathematical operation!'

    }
}

calculate(num1, num2, operator);

module.exports = calculate;