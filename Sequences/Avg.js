let sum = 0;
for(let i = 0;i<5; i++ )
{
    sum += Math.floor(Math.random() * 100);
}
console.log("Sum is: " + sum);
console.log("Average is: " + sum/5);