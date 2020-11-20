const io = require('console-read-write');
let operation1;
let operation2;
let operation3;
let operation4;
async function AskNo() {
    console.log("Enter three numbers")
    let n1 = await io.read();
    let n2 = await io.read();
    let n3 = await io.read();
    numbers = [n1, n2, n3];
    operation1 = numbers[0] + numbers[1] * numbers[2];
    operation2 = numbers[0] + numbers[1] / numbers[2];
    operation3 = numbers[0] % numbers[1] + numbers[2];
    operation4 = numbers[0] * numbers[1] + numbers[2];
    console.log("a+b*c: " + operation1 + " c+a/b: " + operation2 + " a%b+c: " + operation3 + " a*b+c: " + operation4);

    let maximum = GetMaximum(operation1, operation2, operation3, operation4);
    let minimum = GetMinimum(operation1, operation2, operation3, operation4);
    console.log("Maximum: " + maximum);
    console.log("Minimum: " + minimum);
}

function GetMaximum(operation1, operation2, operation3, operation4) {
    let maximum = 0;
    if (Math.max(operation1, operation2, operation3, operation4) == operation1)
        maximum = operation1;
    else if (Math.max(operation1, operation2, operation3, operation4) == operation2)
        maximum = operation2;
    else if (Math.max(operation1, operation2, operation3, operation4) == operation3)
        maximum = operation3;
    else if (Math.max(operation1, operation2, operation3, operation4) == operation4)
        maximum = operation4;
    else
        console.log("Invalid input");
    return maximum
}

function GetMinimum(operation1, operation2, operation3, operation4) {
    let minimum = 0;
    if (Math.min(operation1, operation2, operation3, operation4) == operation1)
        minimum = operation1;
    else if (Math.min(operation1, operation2, operation3, operation4) == operation2)
        minimum = operation2;
    else if (Math.min(operation1, operation2, operation3, operation4) == operation3)
        minimum = operation3;
    else if (Math.min(operation1, operation2, operation3, operation4) == operation4)
        minimum = operation4;
    else
        console.log("Invalid input");
    return minimum
}
AskNo();