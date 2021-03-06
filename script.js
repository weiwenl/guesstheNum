/*

===============================================================================
===============================================================================
===============================================================================
===============================================================================

                        Declaration of Variables

===============================================================================
===============================================================================
===============================================================================
===============================================================================

*/

var genRandomNumbersArr = [];
var playerGuessArr = [];
var count = 1;
var side = document.getElementById("display")
var solution = document.getElementById("solution");
var red = 0;
var orange = 0;
var green = 0;
var track = 1;


//Declare the rows variables but only assign values to it after creation
var row1; var row2; var row3; var row4; var row5; var row6; var row7;


/*

===============================================================================
===============================================================================
===============================================================================
===============================================================================

      Generate Random Computer Sequence and Store its values into display

===============================================================================
===============================================================================
===============================================================================
===============================================================================

*/


var storeSetValues = function(){
    solution.children[0].value = genRandomNumbersArr[0];
    solution.children[1].value = genRandomNumbersArr[1];
    solution.children[2].value = genRandomNumbersArr[2];
    solution.children[3].value = genRandomNumbersArr[3];
};


var genRanNum = function(){
  for(var i = 0; i < solution.children.length; i++) {
    randomNumber = Math.floor(Math.random()*10);
    genRandomNumbersArr.push(randomNumber);
  }
  console.log("This is the solution:"+ genRandomNumbersArr);
  storeSetValues();
}


/*

===============================================================================
===============================================================================
===============================================================================
===============================================================================

                      Generate 7 rows of guess tries

===============================================================================
===============================================================================
===============================================================================
===============================================================================

*/

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


/*

===============================================================================
===============================================================================
===============================================================================
===============================================================================

                      Store player's guess into an array

===============================================================================
===============================================================================
===============================================================================
===============================================================================

*/

var storePlayerGuess = function(track){
  var el = document.querySelector('.row'+track);
  for(var j = 0; j < 4; j++){
    var x = parseInt(el.children[j].value);
    playerGuessArr.push(x);
  }
}


/*

===============================================================================
===============================================================================
===============================================================================
===============================================================================

                              Reset player guess

===============================================================================
===============================================================================
===============================================================================
===============================================================================

*/

var resetPlayerGuess = function(playerGuessArr){
  while (playerGuessArr.length) {
    playerGuessArr.pop();
  }
}


/*

===============================================================================
===============================================================================
===============================================================================
===============================================================================

              Add or remove attribute "disabled" from each row

===============================================================================
===============================================================================
===============================================================================
===============================================================================

*/

//When game start and as game plays on
var removeDisabled = function(whichRow){
  for(var i = 0; i < 4; i++){
    whichRow.children[i].removeAttribute("disabled");
  }
}

//After checking each row
var addDisabled = function(whichRow){
  for(var i = 0; i < 4; i++){
    whichRow.children[i].addAttribute("disabled");
  }
}


/*

===============================================================================
===============================================================================
===============================================================================
===============================================================================

                          Display Win or Lose Message

===============================================================================
===============================================================================
===============================================================================
===============================================================================

*/

var displayWinMsg = function(){
  var divWin = document.createElement("div");
  divWin.setAttribute("style", "position: fixed; background-color: rgb(254, 73, 61); padding: 20px; margin: auto; color: #000; bottom: 280px width: 800px");
  var hWin = document.createElement("h2");
  hWin.setAttribute("style", "fontSize: 50px; textAlign: center");
  var textWin = document.createTextNode("You did it! You've crack the code. :) ");
  hWin.appendChild(textWin);
  display.appendChild(hWin);
}

var displayLoseMsg = function(){
  var divLose = document.createElement("div").setAttribute("class", "loseMsg");
  var hLose = document.createElement("H2");
  var textLose = document.createTextNode("Oh no, you've run out of tries. :( ");
  hLose.appendChild(textLose);
  display.appendChild(hLose);
}



/*

===============================================================================
===============================================================================
===============================================================================
===============================================================================

              Check the player's guess of the number sequence

===============================================================================
===============================================================================
===============================================================================
===============================================================================

*/

var checkGuessNum = function(track){

  genRandomNumbersArr.forEach(function(value, index){
    var indexOfNumberAtIncorrectPosition = genRandomNumbersArr.indexOf(playerGuessArr[index]);
    if(playerGuessArr[index] === genRandomNumbersArr[index]){
      document.querySelector(".row"+track).children[index].style = "background: green";
      console.log("Player guess is " +playerGuessArr);
      genRandomNumbersArr[index] = playerGuessArr[index];
      console.log("The solution is " +genRandomNumbersArr);
      green += 1;
    }

    else if(indexOfNumberAtIncorrectPosition >= 0){
      document.querySelector(".row"+track).children[index].style = "background: orange";
      orange += 1;
    }

    else if(indexOfNumberAtIncorrectPosition == -1){
      document.querySelector(".row"+track).children[index].style = "background: red";
      red += 1;
    }
  });

    if((playerGuessArr[0] === genRandomNumbersArr[0]) && (playerGuessArr[1] === genRandomNumbersArr[1]) &&
      (playerGuessArr[2] === genRandomNumbersArr[2]) && (playerGuessArr[3] === genRandomNumbersArr[3])){
        displayWinMsg();
        document.getElementById("solution").style.visibility = "visible";
    }

    else if((track === 7) && ((playerGuessArr[0] !== genRandomNumbersArr[0]) || (playerGuessArr[1] !== genRandomNumbersArr[1]) ||
      (playerGuessArr[2] || genRandomNumbersArr[2]) || (playerGuessArr[3] !== genRandomNumbersArr[3]))){
        displayLoseMsg();
        document.getElementById("solution").style.visibility = "visible";
    }




  console.log("checkGuessNum - red:", red);
  console.log("checkGuessNum - orange:", orange);
  console.log("checkGuessNum - green:", green);
  return [green, orange, red];
  resetPlayerGuess(playerGuessArr);
}


/*

===============================================================================
===============================================================================
===============================================================================
===============================================================================

                    Track the number of player's guess

===============================================================================
===============================================================================
===============================================================================
===============================================================================

*/

//If previous row is filled up, enable next row
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
      green = 0;
      red = 0;
      orange = 0;
      break;

    case 3:
      console.log("Row4 is disabled");
      removeDisabled(row4);
      resetPlayerGuess(playerGuessArr);
      track = 4;
      green = 0;
      red = 0;
      orange = 0;
      break;

    case 4:
      console.log("Row5 is disabled");
      removeDisabled(row5);
      resetPlayerGuess(playerGuessArr);
      track = 5;
      green = 0;
      red = 0;
      orange = 0;
      break;

    case 5:
      console.log("Row6 is disabled");
      removeDisabled(row6);
      resetPlayerGuess(playerGuessArr);
      track = 6;
      green = 0;
      red = 0;
      orange = 0;
      break;

    case 6:
      console.log("Row7 is disabled");
      removeDisabled(row7);
      resetPlayerGuess(playerGuessArr);
      track = 7;
      green = 0;
      red = 0;
      orange = 0;
      break;
  }
}


/*

===============================================================================
===============================================================================
===============================================================================
===============================================================================

                    Function of each button pressed

===============================================================================
===============================================================================
===============================================================================
===============================================================================

*/

//RESET GAME Button executes this!
document.querySelectorAll("button")[2].addEventListener("click", function(){
  location.reload();
});

//CHECK NUMBER Button executes this!
document.querySelectorAll("button")[1].addEventListener("click", function(){
  console.log(genRandomNumbersArr);
  storePlayerGuess(track);
  console.log(playerGuessArr);
  checkGuessNum(track);
  trackPlayerGuess();
});

//START GAME Button executes this!
document.querySelectorAll("button")[0].addEventListener("click", function(){
  document.querySelectorAll("button")[0].disabled = true;
  document.querySelectorAll("button")[1].removeAttribute("disabled");
  genRanNum();
  generateGuessRow();
  removeDisabled(row1);
});
