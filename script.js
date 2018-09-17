//Declarations and Variables
var genRandomNumbers = [];

var solution = document.getElementById("solution");

//- Save number into pre-set inputs
var storeSetValues = function(){
    solution.children[0].value = genRandomNumbers[0];
    solution.children[1].value = genRandomNumbers[1];
    solution.children[2].value = genRandomNumbers[2];
    solution.children[3].value = genRandomNumbers[3];
}
//If no input, input = random numbers
var genRanNum = function(){
  for(var i = 0; i < solution.children.length; i++) {
    randomNumber = Math.floor(Math.random()*10);
    genRandomNumbers.push(randomNumber);
  }
  console.log(genRandomNumbers);
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

document.querySelectorAll("button")[0].addEventListener("click", function(){
  genRanNum();
  generateGuessRow();
  // document.getElementById("solution").style.visibility = "hidden";
  alert("Game will start now");
});
