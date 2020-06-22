'use strict';

console.log ('This file is connected.');

//global variable
var userPoints = 0;

alert ('Hello, and welcome to the Guessing Game.');

var user = prompt ('What is your name?');
var userName = user.toLowerCase();
console.log(userName);

//the user variable
//~string
//~null
//" " empty
//if the user is empty, string, or null, keep asking them for their name.
//while(user===' ' || user ==null{   do something})

//shorter version
//! means not
while(!user){
  user = prompt('What is your name, PLEASE provide it now!');
}
//Control flow in JavaScript


//if(condition){......}
//if(condtion{do this}else{do this...})
//if(condition){is true} else if(second condition){do this....}else if(third condition)else{catch anything else}

//This is the not equals comparison operator
if(user !=='craig'){
  console.log(user);
  alert('you are not lower case craig we were looking for.');
}
alert('Hello, ' + userName +' ready to play the game?');

var answer = prompt('Is my favorite food popcorn?, Please type yes or no').toLowerCase();
console.log(answer);

//check user input to add points for the game
if(answer === 'no'||answer ==='n' || answer === 'NO' || answer === 'No'){
  alert('You are right. Popcorn is not my favorite.');
  //userPoints = userPoints + 1;
  userPoints += 1;
  console.log('this is the user point total,' + userPoints);
} else {
  alert('Popcorn is gross! You get no points.');
  console.log('this is the user point total,' + userPoints);
}

/**
loops will run until a condition is true or not true
while
while(condition)
{something has to change
}
var i = 0;
while(i < value){
i += 1;
i++ //equals i +i
}
do {here code runs first and always then the condition is checked}while(condition)

for(setUP condition change variable){
    add code to do stuff
}
*/
for(var i = 0; i <10; i++){
  if(i===2){
    console.log('keep going past this number 2.');
    continue;
  }
  if(i===4){
    console.log('this is now breaking the loop.');
    break;
  }
  console.log('the variable i: ',i);
}

// review arrays

var foodsILike = ['tatertots', 'chips', 'popcorn', 'kale'];

//use a loop to traverse through an array

for(var x = 0; x < foodsILike.length; x++);{
  console.log('for loop doing work', foodsILike[x]);
}

//lots of different array methods
//push is a method to add a new element to array
foodsILike.push('swiss chard');
console.log('array push', foodsILike);

//pop removes elements from an array
console.log('array after the pop method', popArrayElement);
var popArrayElement = foodsILike.pop();


//shift array to remove from the front.
var shiftArray = foodsILike.unshift();
console.log('shift of array first element', foodsILike);

console.log(foodsILike);

/**
 Lab Notes: 
2 - for or while loop with conditions 
3 - multiple answers stored in an array; use a loop
4 - use global variable for points 
 */

