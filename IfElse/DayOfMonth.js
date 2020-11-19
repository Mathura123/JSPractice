const io = require('console-read-write');
let dateCheck = false;
async function DateCheck()
{
console.log("Enter the date in MM/DD/YYYY format")
let input = await io.read();
let date = new Date(input);
if(date.getMonth() >=2)
{
    dateCheck = true;
    if(date.getDate()<20 && date.getMonth()==2) dateCheck = false
    if(date.getDate()>20 && date.getMonth()==5) dateCheck = false
}
else
dateCheck = false;
console.log("Date check is " + dateCheck);
}
DateCheck();
console.log();
