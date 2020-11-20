process = require('process');
const io = require('console-read-write');
async function AskNo() {
    console.log("Enter 1 or 10 or 100 or 1000")
    let input = await io.read();
    if (input == 1) {
        console.log("Unity");
    } else if (input == 10) {
        console.log("Ten");
    } else if (input == 100) {
        console.log("Hundered");
    } else if (input == 1000) {
        console.log("Thousand");
    } else {
        console.log("Invalid input");
    }
}
AskNo();