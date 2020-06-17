'use strict';
//first thing to do
console.log('This file is connected');

//prompt our user for input data
var userName = prompt('What is your name?');
console.log(userName);

//Greet the user
alert('Hello,' + userName);

//convert the input to lowercase
var lowerCaseName = userName.toLowerCase();
console.log(lowerCaseName);


//validate the input using conditional logic using strings
if(lowerCaseName === 'craig' || lowerCaseName === 'bob') {
  alert('Welcome back to my page, ' + userName);
} else {
  alert('Welcome new user to my page');
}