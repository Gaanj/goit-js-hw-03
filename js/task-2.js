let firstArray = [];
let secondArray = [];
function makeArray(firstArray, secondArray, maxLength){
    let concatMass = firstArray.concat(secondArray);
    let sliceMass = concatMass.slice(0,maxLength);
    return sliceMass;
}