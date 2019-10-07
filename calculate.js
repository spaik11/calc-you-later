function calculate(num1, num2, operator) {
    const convertNum1 = Number(num1);
    const convertNum2 = Number(num2);
    switch (operator) {
        case '+':
        case 'plus':
        return result = convertNum1 + convertNum2;
        break;
    
        case '-':
        case 'minus':
        return result = convertNum1 - convertNum2;
        break;
    
        case 'x':
        case 'X':
        case 'times':
        return result = convertNum1 * convertNum2;
        break;
    
        case '/':
        return result = convertNum1 / convertNum2;
        break;

        case '%':
        case 'mod':
        case 'modulus':
        return result = convertNum1 % convertNum2;

        default: return 'Sorry, that\'s not a mathematical operation!'
    }
}

calculate(3, 5, '+')



module.exports = calculate;