//Declarations and Variables
var genRandomNumbersArr = [];
var playerGuessArr = [];
var count = 1;
var solution = document.getElementById("solution");
var game = document.getElementById("game");
var red
var green;
var lastRowCount = 0;
var track = 1;

//Declare the rows naming but only assign values to it after creaton
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
  console.log(genRandomNumbersArr);
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
// var storePlayerGuess = function(track){
var storePlayerGuess = function(track){
  // var el = document.querySelector('.row'+track);
  var el = document.querySelector('.row1');
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
  console.log(whichRow);
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
var checkGuessNum = function(){
  red = 0;
  green = 0;

  //Loop over the arrays to find numbers that are correct and correct position
  genRandomNumbersArr.forEach(function(value, index){ //for each thing in the array, do something
    if(playerGuessArr[index] === genRandomNumbersArr[index]){
      playerGuessArr[index] = "p"; //p for player
      console.log("Guess: ", playerGuessArr);
      genRandomNumbersArr[index] = "c"; //c for computer
      console.log("Code: ", genRandomNumbersArr);
      green += 1; //for every match, green ++
    }
  });

  //Loop over again to find numbers that are correct but NOT position
  genRandomNumbersArr.forEach(function(value, index){
    var indexOfNumberAtIncorrectPosition = genRandomNumbersArr.indexOf(playerGuessArr[index]);//find the index of playerGuess in the answer array

    if(indexOfNumberAtIncorrectPosition >= 0){
      genRandomNumbersArr[indexOfNumberAtIncorrectPosition] = "";
      red += 1;
    }
  });

  return [green, red];
  lastRowCount += 1;
  console.log(lastRowCount);
  console.log("green:", green);
  console.log("red:", red);
}

//Track the number of player's guess - if previous row is filled up, enable next row
var trackPlayerGuess = function(){
  if((row1.children[0].value && row1.children[1].value &&
  row1.children[2].value && row1.children[3].value) !== ""){
    removeDisabled(row2);
    track = 1;

    if((row2.children[0].value && row2.children[1].value &&
    row2.children[2].value && row2.children[3].value) !== ""){
      removeDisabled(row3);
      track = 2;

      if((row3.children[0].value && row3.children[1].value &&
      row3.children[2].value && row3.children[3].value) !== ""){
        removeDisabled(row4);
        track = 3;

        if((row4.children[0].value && row4.children[1].value &&
        row4.children[2].value && row4.children[3].value) !== ""){
          removeDisabled(row5);
          track = 4;

          if((row5.children[0].value && row5.children[1].value &&
          row5.children[2].value && row5.children[3].value) !== ""){
            removeDisabled(row6);
            track = 5;

            if((row6.children[0].value && row6.children[1].value &&
            row6.children[2].value && row6.children[3].value) !== ""){
              removeDisabled(row7);
              track = 6;

              if((row7.children[0].value && row7.children[1].value &&
              row7.children[2].value && row7.children[3].value) !== ""){
                removeDisabled(row8);
                track = 7;

                if((row8.children[0].value && row8.children[1].value &&
                row8.children[2].value && row8.children[3].value) !== ""){
                  removeDisabled(row9);
                  track = 8;
                }
              }
            }
          }
        }
      }
    }
  }
}

//Show results of guess
// var evalGuess = function(){
// row1.children[0].style = "background: green";
// }


//CHECK NUMBER Button executes this!
document.querySelectorAll("button")[1].addEventListener("click", function(){
  storePlayerGuess();
  console.log(playerGuessArr);
  checkGuessNum();
  resetPlayerGuess(playerGuessArr);
  // trackPlayerGuess(track);
  // genRandomNumbersArr.includes(playerGuessArr[0]);

  alert("Is my number correct?");
});

//START GAME Button executes this!
document.querySelectorAll("button")[0].addEventListener("click", function(){
  genRanNum();
  generateGuessRow();
  removeDisabled(row1);
  // document.getElementById("solution").style.visibility = "hidden";
  alert("Game will start now");
});
