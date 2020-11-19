var convert = require('convert-units')

var convertFtToM = function(lengthinFt){
    return convert(lengthinFt).from('ft').to('m');
}
var convertFtToinch = function(lengthinFt){
    return convert(lengthinFt).from('ft').to('in');
}
var convertSqFtToAc = function(areainSqFt){
    return convert(areainSqFt).from('ft2').to('ac');
}
function GetArea(length, breadth)
{
    return length*breadth;
}

for(let plotNo = 0; plotNo< 25; plotNo++)
{
    let lengthInFt = Math.floor(Math.random() * 99);
    let breadthInFt = Math.floor(Math.random() * 99);
    console.log("Length of plot in Feets : " + lengthInFt + " Breadth of plot in Feets : " + breadthInFt);
    let lengthInM = convertFtToM(lengthInFt);
    let breadthInM = convertFtToM(breadthInFt);
    console.log("Length of plot in Meters : " + lengthInM + " Breadth of plot in Meters : " + breadthInM);
    let lengthInIn = convertFtToinch(lengthInFt);
    let breadthInIn = convertFtToinch(breadthInFt);
    console.log("Length of plot in Inches : " + lengthInIn + " Breadth of plot in inchs : " + breadthInIn);
    let areaInSqFt = GetArea(lengthInFt, breadthInFt);
    console.log("Area in Sq Feets: " + areaInSqFt);
    let areaInAcre = convertSqFtToAc(areaInSqFt);
    console.log("Area in acres: " + areaInAcre);
}
 