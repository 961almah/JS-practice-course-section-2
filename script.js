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

function describeCountry(country, population, capitalCity) {
    const chosenCountry = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return chosenCountry;
}

const lebanon = describeCountry(`Lebanon`, `5-6`, `Beirut`);
console.log(lebanon);

const italy = describeCountry(`Italy`, 60, `Roma`)
console.log(italy);

const USA = describeCountry(`USA`, 330, `DC`);
console.log(USA);

