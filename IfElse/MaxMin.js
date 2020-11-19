//Minimum and Maximum 3 Digit value
function GetMax(n1, n2, n3,n4,n5)
{
    let max = n1;
    let noArr = [n1,n2,n3,n4,n5]
    for (no of noArr){
        if(no>max) max = no;
    } 
    return max;
}
function GetMin(n1, n2, n3,n4,n5)
{
    let min = n1;
    let noArr = [n1,n2,n3,n4,n5]
    for (no of noArr){
        if(no<min) min = no;
    } 
    return min;
}
let n1 = Math.floor(Math.random() * 1000);
let n2 = Math.floor(Math.random() * 1000);
let n3 = Math.floor(Math.random() * 1000);
let n4 = Math.floor(Math.random() * 1000);
let n5 = Math.floor(Math.random() * 1000);
console.log("Number 1: " + n1 + " Number 2: " + n2 + " Number 3: " + n3 + " Number 4: " + n4 + " Number 5: " + n5);
let min =GetMin(n1,n2,n3,n4,n5);
let max =GetMax(n1,n2,n3,n4,n5);
console.log("Maximum Number: " + max + "\nMinimum Number: " + min);