/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/

var answerDiv = document.getElementById('answer');
var options = document.getElementsByName('prices')[0];
// gets the sum-all button and adds a click listener
var sumAllButton = document.getElementById('sum-all');
sumAllButton.addEventListener("click",function(){sumAll(options);});
// gets the count selected button and adds a click listener
var countSelectedButton = document.getElementById('count-selected');
countSelectedButton.addEventListener("click",function(){count(options);});

function sumAll(opt){
  var total = sum(opt);
  //displays to page
  answerDiv.innerHTML=total;
}

function count(opt){
  var numSelected = countSelected(opt);
  answerDiv.innerHTML=numSelected;
}
