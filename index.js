// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?

  Counter1 is a function expression. It can later be invoked to output a result.
  Counter2 is a function decleration and can be hoisted.
 * 
 * 2. Which of the two uses a closure? How can you tell?
  Counter2 uses a closure, by reaching outside of its scope and into the global scope to find the value of 'count'. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 Counter1 would be preferable when you need the result of counterMaker to be saved and compounded upon in another function later in the script.
 Counter2 would be preferable when you want to update the value of count.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();



// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
return Math.floor(Math.random()*3);
}

console.log(`The team scored ${inning()} points.`);


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/



function finalScore(cb, numOfInnings){
  let teamHome = 0;
  let teamAway = 0;
  let setAwayScore = [];
  let setHomeScore = [];
for(let i = 1; i < numOfInnings+1; i++) {
    setHomeScore.push(teamHome += cb());
    setAwayScore.push(teamAway += cb());
}
    function tallyScore(array){
      let sum = 0;
      for(let i =0; i< array.length; i++){
      sum += array[i];
      }//for loop
      return sum;
      }//tallyScore
console.log(`Home -->`, tallyScore(setHomeScore));
console.log(`Away--> `, tallyScore(setAwayScore));

return (`{teamAway:${teamAway} teamHome:${teamHome}}`)
}

console.log(`This is task 3--->`, finalScore(inning, 0));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getFinalScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */



function scoreboard(cb, cb2, numOfInnings) {
 let container = []

 for (let counter = 1; counter < numOfInnings+1; counter++) {
    if(counter == 1){
      container.push(`${counter}st inning:` + cb2(cb, 1));
       } else if (counter === 2){
     container.push(`${counter}nd inning:` + cb2(cb, 1));
      } else if (counter === 3){
     container.push(`${counter}rd inning:` + cb2(cb, 1));
      } else {
     container.push(`${counter}th inning:` + cb2(cb, 1));
      }//if statement
   }//for loop
   console.log(container);
} //scoreboard function cycleArrays(numOfInnings){
  //let sum = 0;
//for(let i = 0; i < numOfInnings.length; i++)
// sum += vals[i];
//} 
scoreboard(inning, finalScore, 9);