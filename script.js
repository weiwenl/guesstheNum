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
/////////////////////////////////////////
// var genRanNum = function(){
//   for(var i = 0; i < cellsInRow.length; i++){
//     var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//     var pos = Math.floor(Math.random()*10);
//     var set = nums[parseInt(pos)];
//   }
//   console.log(set);
//   return genRandomNumbers.push(set);
// }
//   genRanNum();
//   console.log(parseInt(pos));
//
//   console.log(genRandomNumbers);
//   return temp.push(set)
//////////////////////////////////////////
// console.log(randomNumber);
// console.log(genRandomNumbers)


//- hide the 4 numbers from view of player when <start game> button is clicked


genRanNum();
alert(genRandomNumbers);
