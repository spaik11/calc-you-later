function calculate(num1, num2, operator) {
    const convertNum1 = Number(num1);
    const convertNum2 = Number(num2);
    switch (operator) {
        case '+':
        case 'plus':
        result = convertNum1 + convertNum2;
        console.log(result);
        return result;
    
        case '-':
        case 'minus':
        result = convertNum1 - convertNum2;
        console.log(result);
        return result;
    
        case 'x':
        case 'X':
        case 'times':
        result = convertNum1 * convertNum2;
        console.log(result);
        return result;
    
        case '/':
        result = convertNum1 / convertNum2;
        console.log(result);
        return result;

        case '%':
        case 'mod':
        case 'modulus':
        result = convertNum1 % convertNum2;
        console.log(result);
        return result;

        default: return 'Sorry, that\'s not a mathematical operation!'

    }
}

module.exports = calculate;