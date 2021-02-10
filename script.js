// 'use strict';

// let hasDriversLicense = false;

// const passTest = true;

// if (passTest) hasDriversLicense = true;


// if (hasDriversLicense) console.log(`I can drive`);

// =============================================== //

// Functions //

// function logger() {
//     console.log(`My name is Ali`);
// }

// logger();

// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// =============================================== //

// Functions Assignment

// function describeCountry(country, population, capitalCity) {
//     const chosenCountry = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//     return chosenCountry;
// }

// const lebanon = describeCountry(`Lebanon`, `5-6`, `Beirut`);
// console.log(lebanon);

// const italy = describeCountry(`Italy`, 60, `Roma`)
// console.log(italy);

// const USA = describeCountry(`USA`, 330, `DC`);
// console.log(USA);

// =============================================== //

// functions declarations and expressions

// // function declaration
// function calcAge1(birthYear) {
//     return 2021 - birthYear
// }

// const aliAge = calcAge1(1998);

// // function expression
// const calcAge2 = function (birthYear) {
//     return 2021 - birthYear
// }

// const jianaAge = calcAge2(1996);

// console.log(aliAge, jianaAge);

// =============================================== //

// Arrow Function

// ======================= //

// function calcAge1(birthYear) {
//     return 2021 - birthYear
// }

// // vs

// const calcAge2 = function (birthYear) {
//     return 2021 - birthYear
// }

// // vs

// const CalcAge3 = birthYear => 2021 - birthYear;

// const youssefAge = CalcAge3(2008)
// console.log(youssefAge);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 64 - age;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(2008, `Youssef`));

// =============================================== //

// functions calling on functions

// ======================= //

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// =============================================== //

const calcAge = function (birthYear) {
    return 2021 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 64 - age;

    if (retirement > 0) {
        return retirement
    } else {
        return -1
    }
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1998, `Ali`));
console.log(yearsUntilRetirement(1996, `Jiana`));

// =============================================== //