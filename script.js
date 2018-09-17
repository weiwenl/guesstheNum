//Declarations and Variables
var setNumbers = []; //this should store the input numbers
var genRandomNumbers = [];

var cellsInRow = document.getElementsByClassName("line-zero");
var setCell1 = document.getElementById("01");
var setCell2 = document.getElementById("02");
var setCell3 = document.getElementById("03");
var setCell4 = document.getElementById("04");


// //NO NUMBERS CAN BE REPEATED
//Get 4 numbers from input (0-9, no repeats) and store
//~

//- Save number into pre-set inputs
var storeSetValues = function(){
  setCell1.value = genRandomNumbers[0];
  setCell2.value = genRandomNumbers[1];
  setCell3.value = genRandomNumbers[2];
  setCell4.value = genRandomNumbers[3];
}
//If no input, input = random numbers
var genRanNum = function(){
  for(var i = 0; i < cellsInRow.length; i++) {
    randomNumber = Math.floor(Math.random()*10);
    genRandomNumbers.push(randomNumber);
  }
  storeSetValues();
}

// console.log(randomNumber);
// console.log(genRandomNumbers)

//Generate guess row
var generateGuessRow = function(){
  var game = document.getElementById("game");
  for(var i = 0; i < 7; i++){
    var newRow = document.getElementsByClassName("row_template")[0].cloneNode(true);
    newRow.style.display = "block";
    game.appendChild(newRow.cloneNode(true));
  }
}

var startGame = function(){
  genRanNum();
  generateGuessRow();
  // document.getElementById("solution").style.visibility = "hidden";
  alert("Game will start now");
}
// document.getElementsByTagName("button")[0].addEventListener("click", startGame);

//Execute the start game
// document.querySelector("button")[0].addEventListener("click", startGame);
// generateGuessRow();
// alert(genRandomNumbers);
