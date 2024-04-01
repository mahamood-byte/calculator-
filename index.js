let num1 = parseInt(prompt("Enter a number: "));
let operator = prompt("Enter your operator: ");
let num2 = parseInt(prompt("Enter another number: "));
let result;
switch(operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            console.log("Cannot divide by zero");
            break;
        }
    default:
        console.log("Invalid operator");
        break;
}
console.log(`${num1} ${operator} ${num2} = ${result}`);
