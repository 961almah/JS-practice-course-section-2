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

// const calcAge3 = birthYear => 2021 - birthYear;

// const youssefAge = calcAge3(2008)
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

// functions review

// =================== //

// const calcAge = function (birthYear) {
//     return 2021 - birthYear
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 64 - age;

//     if (retirement > 0) {
//         return retirement
//     } else {
//         return -1
//     }
//     // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1998, `Ali`));
// console.log(yearsUntilRetirement(1996, `Jiana`));

// =============================================== //

// Code Challenge #1

///////////////////////////////////////
// Coding Challenge #1


// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

// 2. Use the function to calculate the average for both teams

// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.

// TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// HINT: To calculate average of 3 values, add them all together and divide by 3
// HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

// GOOD LUCK 😀

// const calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`dolphins win ${avgDolphins} vs ${avgKoalas}`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`koalas win ${avgKoalas} vs ${avgDolphins}`)
//     } else {
//         console.log(`no one wins`);
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// ============================================== //

// Arrays 

// const friend1 = 'Michael'
// const friend2 = 'Steven'
// const friend3 = 'Peter'

// const friends = [`Michael`, `Steven`, `Peter`]
// console.log(friends);

// // const years = new Array(1996, 1998, 2021);
// // console.log(years);

// console.log(friends[0]);
// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[2] = `Jay`
// console.log(friends);

// const firstName = `Ali`
// const ali = [firstName, `Mahmoud`, 2021 - 1998, `programmer`, friends]
// console.log(ali);

// // exercise

// const calcAge = function (birthYear) {
//     return 2021 - birthYear
// }

// const years = [1996, 1998, 2020, 2021];

// // console.log(calcAge(years[0]));

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [age1, age2, age3]

// console.log(ages);

// ============================================== //

// const friends = [`Michael`, `Steven`, `Peter`]

// const newLength = friends.push(`Jay`)

// console.log(friends);
// console.log(newLength);

// friends.unshift(`John`)
// console.log(friends);

// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// const popped = friends.pop();

// console.log(friends.indexOf(`Steven`));
// console.log(friends.includes(`Bob`));

// if (friends.includes(`Steven`)) {
//     console.log(`You have a friend called Steven`);
// }

// Methods

// ============================================== //

// Coding Challenge #2

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
// 2. And now let's use arrays! So create an array 'bills' containing the test data below.
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
// 4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

// TEST DATA: 125, 555 and 44

// HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

// GOOD LUCK 😀

// const calcTip = function (bill) {
//     return bill >= 50 <= 300 ? bill * (15 / 100) : bill * (20 / 100);
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// console.log(bills, tips);

// const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])]

// console.log(totals);

// ================================================ //

// Intro to Objects

// ===================

// const aliArray = [
//     `Ali`,
//     `Mahmoud`,
//     2021 - 1998,
//     `programmer`,
//     [`Michael`, `Peter`, `Steven`]
// ]

// const aliObject = {
//     firstName: `Ali`,
//     lastName: `Mahmoud`,
//     age: 21,
//     job: `programmer`,
//     friends: [`Michael`, `Peter`, `Steven`]
// }

// ================================================ //

// Dot vs Bracket Notation

// ======================

// const aliObject = {
//     firstName: `Ali`,
//     lastName: `Mahmoud`,
//     age: 21,
//     job: `programmer`,
//     friends: [`Michael`, `Peter`, `Steven`]
// }
// console.log(aliObject);

// console.log(aliObject.lastName);
// console.log(aliObject[`lastName`]);

// const nameKey = `Name`;
// console.log(aliObject[`first` + nameKey]);
// console.log(aliObject[`last` + nameKey]);

// const interestedIn = prompt(`what do you want to know about Ali? choose between firstName, lastName, age, job, and friends`);


// if (aliObject[interestedIn]) {
//     console.log(aliObject[interestedIn]);
// } else {
//     console.log(`wrong request`);
// }

// aliObject.location = `New York`;
// aliObject[`birthPlace`] = `Beirut`;

// console.log(aliObject);

// challenge 

// console.log(`${aliObject.firstName} has ${aliObject.friends.length} friends, and his best friend is ${aliObject.friends[0]}`);

// ================================================ //

// Objects methods

// ======================== //

// const aliObject = {
//     firstName: `Ali`,
//     lastName: `Mahmoud`,
//     birthYear: 1998,
//     job: `programmer`,
//     friends: [`Michael`, `Peter`, `Steven`],
//     hasDriversLicense: false,
//     // calcAge: function (birthYear) {
//     //     return 2021 - birthYear
//     // }
//     // calcAge: function () {
//     //     // console.log(this);
//     //     return 2021 - this.birthYear
//     // }
//     calcAge: function () {
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },
//     // getSummary: function () {
//     //     if (this.hasDriversLicense === true) {
//     //         console.log(`${this.firstName} is a ${this.age}-year old programmer, and he has a driver's license`);
//     //     } else {
//     //         console.log(`${this.firstName} is a ${this.age}-year old programmer, and he does not have a driver's license`);
//     //     }
//     // }
//     getSummary: function () {
//         return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? `a` : `no`} driver's license`
//     }
// }

// console.log(aliObject.calcAge());

// console.log(aliObject.age);
// // console.log(aliObject[`calcAge`](1998));

// // challenge

// console.log(aliObject.getSummary());

// ================================================ //

// // coding challenge #3

// // ================== //

// /*
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// GOOD LUCK 😀
// */

// const johnObject = {
//     firstName: `John`,
//     lastName: `Smith`,
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         return this.BMI = this.mass / (this.height ** 2)
//     }
// }

// const markObject = {
//     firstName: `Mark`,
//     lastName: `Miller`,
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         return this.BMI = this.mass / (this.height ** 2)
//     }
// }

// console.log(markObject.calcBMI());
// console.log(johnObject.calcBMI());

// if (johnObject.BMI > markObject.BMI) {
//     console.log(`John Smith's BMI (${johnObject.BMI}) is higher than Mark Miller's BMI (${markObject.BMI})`)
// } else {
//     console.log(`John Smith's BMI (${johnObject.BMI}) is lower than Mark Miller's BMI (${markObject.BMI})`)
// }

// console.log(markObject.BMI);
// console.log(johnObject.BMI);

// =============================================== //

// iteration: the for loop

// ========================== //

// console.log(`lifting weights repition 1`);
// console.log(`lifting weights repition 2`);
// console.log(`lifting weights repition 3`);
// console.log(`lifting weights repition 4`);
// console.log(`lifting weights repition 5`);
// console.log(`lifting weights repition 6`);
// console.log(`lifting weights repition 7`);
// console.log(`lifting weights repition 8`);
// console.log(`lifting weights repition 9`);
// console.log(`lifting weights repition 10`);

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`lifting weight repitition ${rep}`);
// }

// =============================================== //

// looping arrays, breaking and continuing

// =============== //

// const aliArray = [
//     `Ali`,
//     `Mahmoud`,
//     2021 - 1998,
//     `programmer`,
//     [`Michael`, `Peter`, `Steven`],
//     true
// ]

// const types = [];

// for (let i = 0; i < aliArray.length; i++) {
//     console.log(aliArray[i]);

//     // filling types array
//     // types[i] = typeof aliArray[i];

//     types.push(typeof aliArray[i])
// }
// console.log(types);

// const years = [1996, 1998, 2008, 2020, 2021];

// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2021 - years[i]);
// }

// console.log(ages);

// continue and break

// console.log(`----------ONLY STRINGS----------`);
// for (let i = 0; i < aliArray.length; i++) {
//     if (typeof aliArray[i] != `string`) continue;
//     console.log(aliArray[i]);
// }

// console.log(`----------BREAK WITH NUMBER----------`);
// for (let i = 0; i < aliArray.length; i++) {
//     if (typeof aliArray[i] === `number`) break;
//     console.log(aliArray[i]);
// }

// =============================================== //

// looping backwards and loops in loops 

// ========================== //

// const aliArray = [
//     `Ali`,
//     `Mahmoud`,
//     2021 - 1998,
//     `programmer`,
//     [`Michael`, `Peter`, `Steven`]
// ];

// for (i = aliArray.length - 1; i >= 0; i--) {
//     console.log(aliArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`==== starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: lifting weight repition ${rep}`);
//     }
// }

// ===============================================

// the while loop 

// ================== //

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`FOR: lifting weight repitition ${rep}`);
// };

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: lifting weight repitition ${rep}`);
//     rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`${dice}, roll again`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log(`bingo`);
// }

// =============================================== //

// coding challenge #4 

// ====================== //

const calcTip = function (bill) {
    return bill >= 50 <= 300 ? bill * (15 / 100) : bill * (20 / 100);
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];

const totals = [];


for (i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
    tips.push(tip)
    totals.push(tip + bills[i])
}


console.log(bills, tips, totals);

// bonus

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i]
        sum += arr[i];
    }
    return sum / arr.length;
}


console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));




const x = 23