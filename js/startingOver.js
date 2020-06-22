'use strict';
console.log('This file is connected');

var userPoints = 0;

var userName = prompt('What is your name?');
//console.log(userName);

alert('Hello, ' + userName + '! Welcome to my site.');

/*
//prompt our user for five yes or no questions
var favoriteFood = prompt('Is ice cream my favorite food?');
console.log(favoriteFood);

var lowerCaseFood = favoriteFood.toLowerCase();
console.log(lowerCaseFood);

if(lowerCaseFood === 'yes' || lowerCaseFood === 'y') {
  //console.log('You are correct. Whitey\'s Ice Cream in Davenport makes the best ice cream in the world.');
  alert('You are correct. Whitey\'s Ice Cream in Davenport makes the best ice cream in the world.');
  userPoints +=1;
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
  userPoints +=1;
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
  userPoints +=1;
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
  userPoints +=1;
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
  userPoints += 1;
}
else {
  //console.log ('Please remember to respond using yes or no.');
  alert('Please remember to respond using yes or no.');
} */

//6th Question - Question that require numeric input. Alert indicates if it's too high or too low.

/*
function questionSix(){
  var userChance = 0;
  var ollieAge = 4;

  alert('You are have four guesses for the next question.');

  while (userChance < 4) {
    var userNumber = prompt ('How old is my son?');
    userNumber = Number(userNumber);
    userChance += 1;

    if (userNumber === ollieAge){
      alert('Way to go!');
      userPoints += 1;
      break;
    }else if (userChance === 4){
      alert ('You are out of chances.');
    }else if (userNumber < ollieAge){
      alert('Too low');
    } else if(userNumber > ollieAge){
      alert('Too high');
    } else if(!userNumber){
      alert('Please answer using only numeric values.');
    }
  } alert('The answer was ' + ollieAge + '.');
}

*/

//Add a 7th question that has multiple possible correct answers that are stored in an array.

function questionSeven(){
  var guesses = 0;
  var myFamily = ['Ollie', 'Oliver', 'Caroline', 'Craig'];

  alert('You are have six guesses for the next question.');

  while (guesses < 6) {
    var correctAnswer = false;
    var familyAnswer = prompt ('Can you guess the names of people in my family?');

    for (var i = 0; i < myFamily.length; i++) {
      if (familyAnswer === myFamily[i]) {
        console.log(guesses, familyAnswer, 'correct');
        correctAnswer = true;
        break;
      } else if(familyAnswer !== myFamily[i]){
        console.log(guesses, familyAnswer, 'incorrect');
        continue;
      }
    }

    if(correctAnswer === true){
      alert('Yes, absolutely. They are in my family');
      userPoints += 1;
    } else if(correctAnswer === false) {
      alert('Sounds like a nice name, but they aren\'t in my family.');
    }
    guesses +=1;
  }
}

questionSix();
questionSeven();






//Give the user 6 attempts to guess the correct answer.

//The guesses will end once the user guesses a correct answer or they run out of attempts.

//Display all the possible correct answers to the user.



//Consider using a loop of some sort for this question.
