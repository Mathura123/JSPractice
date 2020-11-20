const io = require('console-read-write');
async function AskNo() {
    console.log("Enter a single digit no")
    let input = await io.read();
switch(input)
{
case 0:
    console.log("Sunday");
    break;
case 1:
    console.log("Monday");
    break;
case 2:
    console.log("Tuesday");
    break;
case 3:
    console.log("Wednesday");
    break;
case 4:
    console.log("Thursday");
    break;
case 5:
    console.log("Friday");
    break;
case 6:
    console.log("Saturday");
    break;
default:
    console.log("Invalid Input");
    break;
}
}
AskNo()