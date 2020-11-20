io = require('console-read-write');
async function askNo() {
    let numbers = [];
    console.log("Enter your first no");
    numbers[0] = parseInt(await io.read());
    console.log("Enter your second no");
    numbers[1] = parseInt(await io.read());
    if (PalindromeCheck(numbers))
        console.log("It is a palindrome");
    else
        console.log("It is not a palindrome");
}

function PalindromeCheck(number) {
    var numbers = number;
    var reverseNo = numbers.reverse().join('');
    return reverseNo == numbers.join('');
}
askNo();