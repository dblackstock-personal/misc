//how to get current date
//how to get number of days between two days

let currentTime = new Date();

console.log(`current time is ${currentTime}`);

let birthDate = new Date(1993,5,16);
let upcomingYear = currentTime.getFullYear();
// console.log(upcomingYear);

// //TODO: if currentdate is after June 16th we need to set it to next year
// let myBirthdayThisYear = new Date(currentTime.getUTCFullYear(), birthDate.getUTCMonth(), birthDate.getDay()); //this needs to define a Date variable with my birthday but this year
// console.log('birthday this year is ' + birthDate.getDay());
// //if (currentTime.getTime() - ){

// //}


birthDate.setFullYear(upcomingYear+1);

//console.log(`upcoming bday is on ${birthDate}`);

let timeDifference = birthDate.getTime() - currentTime.getTime();
timeDifference = timeDifference/1000/60/60/24;
console.log (`there are ${Math.floor(timeDifference)+1} days until my next birthday.`);