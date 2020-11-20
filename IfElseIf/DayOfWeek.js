const io = require('console-read-write');
async function AskNo() {
    console.log("Enter a between 0 and 6")
    let input = await io.read();
    if (input == 0) {
        console.log("Sunday");
    } else if (input == 1) {
        console.log("Monday");
    } else if (input == 2) {
        console.log("Tuesday");
    } else if (input == 3) {
        console.log("Wednesday");
    } else if (input == 4) {
        console.log("Thursday");
    } else if (input == 5) {
        console.log("Friday");
    } else if (input == 6) {
        console.log("Saturday");
    } else {
        console.log("Invalid Input");
    }
}
AskNo();