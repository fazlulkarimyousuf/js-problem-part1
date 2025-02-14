// 12 inch 1 feet

function inchtoFeet(inch){
    const feet = inch /12;
    return feet;
}

// 75
function inchtoFeet(inch){
    const feetFraction = inch /12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaing = inch % 12;
    const result = feetNumber +' ft' + inchRemaing + ' inch.'
    return result;
}
const shovoHeight = inchtoFeet(75);
// console.log(shovoHeight); 
const shovoHeight2 = inchtoFeet2(75);
console.log(shovoHeight2)
console.log(shovoHeight2)