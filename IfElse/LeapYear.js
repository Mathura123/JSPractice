async function CheckLeapYear()
{
console.log("Enter the year : ");
const io = require('console-read-write');
let year = await io.read(parseInt());
if(year%400==0)
{
    console.log(year+" is a leap year.");
}
else if(year%4==0)
{
    console.log(year+" is a leap year.");
}
else if(year%100==0)
{
    console.log(year+" is not a leap year.");
}
else
{
    console.log(year+" is not a leap year.");
}
}
CheckLeapYear();