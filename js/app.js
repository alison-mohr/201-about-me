/* eslint-disable eqeqeq */
'use strict';
//first thing to do
console.log('This file is connected');
/*
//Greet the user using prompt
var userName = prompt ('What is your name?');
console.log(userName);
alert('Hello,' + userName + '! Welcome to my site.'); */

/* //prompt our user for five yes or no questions
var favoriteFood = prompt('Is ice cream my favorite food?');
console.log(favoriteFood);

var lowerCaseFood = favoriteFood.toLowerCase();
console.log(lowerCaseFood);

if(lowerCaseFood === 'yes' || lowerCaseFood === 'y') {
  //console.log('You are correct. Whitey\'s Ice Cream in Davenport makes the best ice cream in the world.');
  alert('You are correct. Whitey\'s Ice Cream in Davenport makes the best ice cream in the world.');
} else if(lowerCaseFood === 'no'|| lowerCaseFood === 'n') {
  //console.log ('Incorrect, I love ice cream.');
  alert('Incorrect, I love ice cream.');
}
else {
  //console.log ('Please remember to respond using yes or no.');
  alert('Please remember to respond using yes or no.');
}

var myKids = prompt('Do I have two children?');
console.log(myKids);

var lowerCaseKids = myKids.toLowerCase();
console.log(lowerCaseKids);

if(lowerCaseKids === 'yes' || lowerCaseKids === 'y') {
  //console.log('You are correct. I have a two and four year old.');
  alert('You are correct. I have a two and four year old.');
} else if(lowerCaseKids === 'no'|| lowerCaseKids === 'n') {
  //console.log ('Incorrect, I have a son and daughter.');
  alert('Incorrect, I have a son and daughter.');
}
else {
  //console.log ('Please remember to respond using yes or no.');
  alert('Please remember to respond using yes or no.');
}

var footballTeam = prompt('Are the Greenbay Packers the best team in the NFL?');
console.log(footballTeam);

var lowerCaseFootball = footballTeam.toLowerCase();
console.log(lowerCaseFootball);

if(lowerCaseFootball === 'yes' || lowerCaseFootball === 'y') {
  //console.log('You are correct. The Packers rock.');
  alert('You are correct. The Packers rock.');
} else if(lowerCaseFootball === 'no'|| lowerCaseFootball === 'n') {
  //console.log ('I\'m afraid you are confused.');
  alert('I\'m afraid you are confused.');
}
else {
  //console.log ('Please remember to respond using yes or no.');
  alert('Please remember to respond using yes or no.');
}

var myHobby = prompt('Do I enjoy distance running?');
console.log(myHobby);

var lowerCaseHobby = myHobby.toLowerCase();
console.log(lowerCaseHobby);

if(lowerCaseHobby === 'yes' || lowerCaseHobby === 'y') {
  //console.log('You are correct.');
  alert('You are correct.');
} else if(lowerCaseHobby === 'no'|| lowerCaseHobby === 'n') {
  //console.log ('Incorrect, I love to run.');
  alert('Incorrect, I love to run.');
}
else {
  //console.log ('Please remember to respond using yes or no.');
  alert('Please remember to respond using yes or no.');
}


var myTown = prompt ('Do I live in Cedar Rapids?');
console.log(myTown);

//convert answers to lowerCase
var lowerCaseTown = myTown.toLowerCase();
console.log(lowerCaseTown);

//validate the input using conditional logic using strings
if(lowerCaseTown === 'yes' || lowerCaseTown === 'y') {
  //console.log('You are incorrect. I live in Central Iowa.');
  alert('You are incorrect. I live in Central Iowa.');
} else if(lowerCaseTown === 'no'|| lowerCaseTown === 'n') {
  //console.log ('Correct, I live in the home of Adventureland.');
  alert('Correct, I live in the home of Adventureland.');
}
else {
  //console.log ('Please remember to respond using yes or no.');
  alert('Please remember to respond using yes or no.');
}

 */

//6th Question - Question that require numeric input. Alert indicates if it's too high or too low.


alert('Hello, and welcome to the Guessing Game.');

var userPoints = 0;

/*
var user = prompt ('What is your name?');
var userName = user.toLowerCase();
console.log(userName); */

function question6() {
  var opportunities = 4;
  var answer = 4;


  while (opportunities > 0) {
    var ollieAge = prompt('How old is my son?');
    if (!ollieAge) {
      break;
    }

    ollieAge = Number(ollieAge);


    if (ollieAge === answer) {
      alert('Correct! Great guessing!');
      userPoint += 1;
      opportunities = 0;
      break;
    }
    //Indicates through an alert if the guess is "too high or low"

    else {
      if (ollieAge < answer) {
        alert('Too low!');
      }
      else {
        if (ollieAge > answer) {
          alert('Too high!');
        }
      }
      opportunities--;
      console.log('guessCount is ' + opportunities);
    }

  
    //After attempts - tell user correct answer
    alert('The answer was ' + answer + '.')
  } 
  question6();

//It should give four opportunities to get the correct answer;