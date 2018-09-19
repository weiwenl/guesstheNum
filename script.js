//Declarations and Variables
var genRandomNumbersArr = [];
var playerGuessArr = [];
var count = 1;
var solution = document.getElementById("solution");
var game = document.getElementById("game");
var red = 0;
var orange = 0;
var green = 0;
// var red;
// var orange;
// var green;
var track = 1;
var allMatchArr = ["p", "p", "p", "p"];

//Declare the rows naming but only assign values to it after creation
var row1, row2, row3, row4, row5, row6, row7;


//Save number into solution text value
var storeSetValues = function(){
    solution.children[0].value = genRandomNumbersArr[0];
    solution.children[1].value = genRandomNumbersArr[1];
    solution.children[2].value = genRandomNumbersArr[2];
    solution.children[3].value = genRandomNumbersArr[3];
}


//Generate 4 random numbers
var genRanNum = function(){
  for(var i = 0; i < solution.children.length; i++) {
    randomNumber = Math.floor(Math.random()*10);
    genRandomNumbersArr.push(randomNumber);
  }
  console.log("This is the solution:"+ genRandomNumbersArr);
  storeSetValues();
}


//Generate guess row
var generateGuessRow = function(){
  for(var i = 0; i < 7; i++){
    var newRow = document.getElementsByClassName("row_template")[0].cloneNode(true);
    newRow.style.display = "block";
    game.appendChild(newRow.cloneNode(true)).className = "row"+count++;
  }
  row1 = document.querySelector(".row1");
  row2 = document.querySelector(".row2");
  row3 = document.querySelector(".row3");
  row4 = document.querySelector(".row4");
  row5 = document.querySelector(".row5");
  row6 = document.querySelector(".row6");
  row7 = document.querySelector(".row7");
}

// var playerWins = function(){
//   if(track <= 7){
//     if(genRandomNumbersArr === playerGuessArr){
//       alert("You win");
//     }
//   }
//   else{
//     alert("You lose");
//   }
// }



//Store player guess
var storePlayerGuess = function(track){
// var storePlayerGuess = function(){
  var el = document.querySelector('.row'+track);
  // var el = document.querySelector('.row1');
  for(var j = 0; j < 4; j++){
    var x = parseInt(el.children[j].value) //Convert each string value and store in 'c' as number
    playerGuessArr.push(x);
  }
}


//Reset player guess
var resetPlayerGuess = function(playerGuessArr){
  while (playerGuessArr.length) {
    playerGuessArr.pop();
  }
}



//Remove attribute disabled - when game start and as game plays on
var removeDisabled = function(whichRow){
  for(var i = 0; i < 4; i++){
    whichRow.children[i].removeAttribute("disabled");
  }
}

//Add attribute disabled - after checking each row
var addDisabled = function(whichRow){
  for(var i = 0; i < 4; i++){
    whichRow.children[i].addAttribute("disabled");
  }
}


//Check the players guess of the number
var checkGuessNum = function(track){
  // alert("Is my number correct?");
  // green = 0;
  // red = 0;
  // orange = 0;

  //Loop over the arrays to find numbers that are correct and correct position
  genRandomNumbersArr.forEach(function(value, index){ //for each thing in the array, do something
    var indexOfNumberAtIncorrectPosition = genRandomNumbersArr.indexOf(playerGuessArr[index]);//find the index of playerGuess in the answer array
    if(playerGuessArr[index] === genRandomNumbersArr[index]){
      document.querySelector(".row"+track).children[index].style = "background: green";
      playerGuessArr[index] = "p"; //p for player
      // this.children[index].style = "background: green"; //###
      console.log("Player guess is " +playerGuessArr);
      genRandomNumbersArr[index] = "c"; //c for computer
      console.log("The solution is " +genRandomNumbersArr);
      green += 1; //for every match, green ++
      // console.log("Green count:", green);

    }
  //});

  //Loop over again to find numbers that are correct but NOT position
  // genRandomNumbersArr.forEach(function(value, index){
    // var indexOfNumberAtIncorrectPosition = genRandomNumbersArr.indexOf(playerGuessArr[index]);//find the index of playerGuess in the answer array

    else if(indexOfNumberAtIncorrectPosition >= 0){
      genRandomNumbersArr[indexOfNumberAtIncorrectPosition] = "";
      document.querySelector(".row"+track).children[index].style = "background: orange";
      orange += 1;
      // console.log("Orange count:", orange);
    }
    else if(indexOfNumberAtIncorrectPosition == -1){
      document.querySelector(".row"+track).children[index].style = "background: red";
      red += 1;
      // console.log("Red count:", red);
    }
  });

  // genRandomNumbersArr.forEach(function(value, index){
  //   var indexOfNumberAtIncorrectPosition = genRandomNumbersArr.indexOf(playerGuessArr[index]);//find the index of playerGuess in the answer array
  //   console.log("hi"+indexOfNumberAtIncorrectPosition);
  //   if(indexOfNumberAtIncorrectPosition == -1){
  //     document.querySelector(".row"+track).children[index].style = "background: red";
  //     red += 1;
  //     console.log("Red count:", red);
  //   }
  // });

  // document.querySelector(".row"+track).forEach(function(value, index){
  //     if(document.querySelector(".row"+track).children[index].style !== "background: green" &&
  //   document.querySelector(".row"+track).children[index].style !== "background: orange"){
  //     document.querySelector(".row"+track).children[index].style = "background: red";
  //   }
  // });






  // if(playerGuessArr = allMatchArr){//tempCode
  //   alert("YOU CRACK THE CODE!");
  //   track = 0;
  // }
  console.log("checkGuessNum - red:", red);
  console.log("checkGuessNum - orange:", orange);
  console.log("checkGuessNum - green:", green);
  return [green, orange, red];
  resetPlayerGuess(playerGuessArr);
}


//Track the number of player's guess - if previous row is filled up, enable next row
var trackPlayerGuess = function(){
  console.log("trackPlayerGuess - red:", red);
  console.log("trackPlayerGuess - orange:", orange);
  console.log("trackPlayerGuess - green:", green);

  switch(track){
    case 1:
      console.log("Row2 is disabled");
      removeDisabled(row2);
      resetPlayerGuess(playerGuessArr);
      track = 2;
      green = 0;
      red = 0;
      orange = 0;
      break;

    case 2:
      console.log("Row3 is disabled");
      removeDisabled(row3);
      resetPlayerGuess(playerGuessArr);
      track = 3;
      break;

    case 3:
      console.log("Row4 is disabled");
      removeDisabled(row4);
      resetPlayerGuess(playerGuessArr);
      track = 4;
      break;

    case 4:
      console.log("Row5 is disabled");
      removeDisabled(row5);
      resetPlayerGuess(playerGuessArr);
      track = 5;
      break;

    case 5:
      console.log("Row6 is disabled");
      removeDisabled(row6);
      resetPlayerGuess(playerGuessArr);
      track = 6;
      break;

    case 6:
      console.log("Row7 is disabled");
      removeDisabled(row7);
      resetPlayerGuess(playerGuessArr);
      track = 7;
      break;

    default:
      console.log("You already won the game.");
    break;

  }
}


//RESET GAME Button executes this!
document.querySelectorAll("button")[2].addEventListener("click", function(){
  location.reload();
});

//CHECK NUMBER Button executes this!
document.querySelectorAll("button")[1].addEventListener("click", function(){
  storePlayerGuess(track);
  console.log(playerGuessArr);
  checkGuessNum(track);
  trackPlayerGuess();
  // if(playerGuessArr = allMatchArr){//tempCode
  //   alert("YOU CRACK THE CODE!");
  //   track = 0;
  // }
  // else{
  //   trackPlayerGuess();
  // }
});

//START GAME Button executes this!
document.querySelectorAll("button")[0].addEventListener("click", function(){
  document.querySelectorAll("button")[1].removeAttribute("disabled");
  genRanNum();
  generateGuessRow();
  removeDisabled(row1);
  // document.getElementById("solution").style.visibility = "hidden";
  // alert("Game will start now");
});
