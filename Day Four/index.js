//15 excercises from easy to hard on what i have learned today.

// 1 easy: Write a program that checks if a number is greater than 10.
//  If it is, log "The number is greater than 10" to the console.

let number = 11;

if (number > 10 ){
    console.log('The number is greater than 10.')
} else {
    console.log('Choose a higher number.')
}

//2 easy: Write a program that checks if a number is even or odd. Log "Even" if it's even, otherwise log "Odd".

let num= 10;

if (num % 2 === 0){
    console.log('Even');
} else {
    console.log('Odd');
}


//3 easy: Write a program that compares two numbers and logs the larger one.

let lgNum= 1, lwNum= 10;

if (lgNum >lwNum){
    console.log(lgNum);
}else{
    console.log(lwNum);
}

//4 easy: Write a program that checks if a number is between 10 and 20 (inclusive).
//  Log "Within range" if true, otherwise log "Out of range".

let range= 122;

if (range >=10 && range <= 20){
    console.log('Within the range');
} else {
    console.log('Out of the range');
}

//5 easy:  Write a program that uses the ternary operator to check if a number is positive.
//  Log "Positive" if true, otherwise log "Not positive".

let check= -10;
check==true ? console.log('Positive'): console.log('Not Positive');

//or

let checkNum= 1;

checkNum >0 ? console.log('Positive') : console.log('Not positive');




//6 Medium: Write a program that checks if a number is negative, zero, or positive. Log the appropriate message.

let numCheck= -1;

if (numCheck > 0){
    console.log('It is Positive');
} else if(numCheck === 0){
    console.log('It is zero');
} else {
    console.log('It is negative');
}


// 7 medium: Write a program that checks if a user's input is either "admin" or "user". 
// Log "Access granted" if true, otherwise log "Access denied".
let userInput = "Mark";

if (userInput === "admin"|| userInput === "user" ){
    console.log("Acces Granted");
} else {
    console.log("Access denied");
}


//8 medium: Write a program that checks if a variable is falsy. Log "Falsy" if true, otherwise log "Truthy".

let variable= true;

if (!variable){
    console.log('Falsy');
} else {
    console.log('Truthy');
}


//9 medium: Write a program that takes a day of the week (e.g., "Monday") and logs "Weekday" or "Weekend" using a switch statement.

let day='ADsfweas';

switch(day){
    case 'Monday':
        console.log('WeekDay');
        break;
        case 'Tuesday':
            console.log('WeekDay');
            break;
            case 'Wednesday':
                console.log('WeekDay');
                break;
                case 'Thursday':
                    console.log('WeekDay');
                    break;
                    case 'Friday':
                        console.log('WeekDay');
                        break;
                        case 'Saturday':
                            console.log('Weekend');
                            break;
                            case 'Sunday':
                                console.log('Weekend');
                                break;
                                default:
                                    console.log('Invalid Day')
}



//10 medium: Write a program that uses the ternary operator to check if a number is greater than 100,
//  less than 50, or in between. Log the appropriate message.

let numCk= 62;
numCk >= 100 ? console.log('It is above 100'): numCk <= 50 ? console.log('It is less than 50'): console.log('It is between 100 and 50');



// 11 hard: Write a program that checks if a number is divisible by 2, 3, or both. 
// Log the appropriate message (e.g., "Divisible by 2", "Divisible by 3", "Divisible by both").

let divisible= 10;

if (divisible % 2 === 0 && divisible % 3 === 0) {
    console.log('Divisible by both')
} else if (divisible % 2 === 0){
    console.log('Divisible by 2');
} else if(divisible % 3 === 0){
    console.log('Divisible by 3');
} else{
    console.log('Not divisible by 2 or 3');
}


//12 hard: Write a program that checks if a user's age is between 18 and 65 and if they have a valid ID. #
// Log "Eligible" if both conditions are true, otherwise log "Not eligible".     


let userAge= 22;
let validId= false;

if(userAge >=18 &&  userAge<=65 && validId === true){
    console.log('Eligible');
} else{
    console.log('Not eligible')
}


// 13 hard: Write a program that uses a switch statement with intentional fall-through
//  to group months into seasons (e.g., "Winter", "Spring", etc.).

/* Winter : December, January and February
   Spring: March, April and May
   Summer: June, July and August
   Fall: September, October and November
     
   
*/


let month= 'January'

switch(month){
    case 'December':
    case 'January':
    case 'February':
        console.log('Winter');
        break;
    case 'March':
    case 'April':
    case 'May':
        console.log('Spring');
        break;
    case 'June':
    case 'July':
    case 'August':
        console.log('Summer');
        break;
    case 'September':
    case 'October':
    case 'November':
        console.log('Fall');
        break;
    default:
        console.log('Please Insert a valid Month!');
}



//14 hard: Write a program that uses nested ternary operators to check if a number is positive, 
// negative, or zero. Log the appropriate message.

let numbCheck=0;

numbCheck >= 1 ? console.log('Positive'): numbCheck === 0 ? console.log('Zero') : console.log('Negative');



//15 hard: Write a program that takes a user's age and membership status (true/false) and logs:

/*
"Senior Discount" if age is 65 or older. // no need to check the mmbship status

"Member Discount" if age is between 18 and 64 and membership is true. // here i need to check it

"No Discount" otherwise.

*/

let usersAge= 31; isMember= false;



if (usersAge >= 65){
    console.log('Senior Discount');
} else if( userAge>= 18 && userAge <= 64 && isMember){
    console.log('Member Discount');
} else {
    console.log('No discount bch');
}



