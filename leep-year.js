/**
 * year will be e leap year if the year is division by 4
 */

function isLeapYear (year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

const isLipi = isLeapYear(2043);
console.log(isLipi);