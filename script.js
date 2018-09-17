//Declarations and Variables
var genRandomNumbers = [];
var playerGuess = [];
var count = 1;
var solution = document.getElementById("solution");
var game = document.getElementById("game");

//Declare the rows naming but only assign values to it after creaton
var row1, row2, row3, row4, row5, row6, row7;


//Save number into solution text value
var storeSetValues = function(){
    solution.children[0].value = genRandomNumbers[0];
    solution.children[1].value = genRandomNumbers[1];
    solution.children[2].value = genRandomNumbers[2];
    solution.children[3].value = genRandomNumbers[3];
}


//Generate 4 random numbers
var genRanNum = function(){
  for(var i = 0; i < solution.children.length; i++) {
    randomNumber = Math.floor(Math.random()*10);
    genRandomNumbers.push(randomNumber);
  }
  console.log(genRandomNumbers);
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


//Store player guess
var storePlayerGuess = function(){
  var el = document.querySelector('.row1');
  for(var j = 0; j < 4; j++){
    var c = parseInt(el.children[j].value) //Convert each string value and store in 'c' as number
    playerGuess.push(c);
  }
}


//Remove attribute disabled
var removeDisabled = function(whichRow){
  console.log(whichRow);
  for(var i = 0; i < 4; i++){
    whichRow.children[i].removeAttribute("disabled");
  }
}

//Check if number is correct
document.querySelectorAll("button")[1].addEventListener("click", function(){
  storePlayerGuess();
  console.log(playerGuess);

  alert("Is my number correct?");
});

//Start Game
document.querySelectorAll("button")[0].addEventListener("click", function(){
  genRanNum();
  generateGuessRow();
  removeDisabled(row1);
  // document.getElementById("solution").style.visibility = "hidden";
  alert("Game will start now");
});
