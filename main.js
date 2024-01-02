function game() {

  // Get computer choice
  function getComputerChoice(word) {
    let choices = ["rock", "papper", "scissors"];
    return (word = choices[Math.floor(Math.random() * choices.length)]);
    console.log(getComputerChoice());
  }

  // This finctions will store and update player score
  let PlayerScore = 0;
  function updatePlayerScore(point) {
    PlayerScore += point;
  }
  function getPlayerScore() {
    return PlayerScore;
  }
  // End
  // This functions will store and update computer score
  let computerScore = 0;
  function updateComputerScore(point) {
    computerScore += point;
  }
  function getComputerScore() {
    return computerScore;
  }
  //End
  function playGame(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
      console.log("You won; Rock beats Scissors.");
      updatePlayerScore(1);
      console.log("Your Score is", getPlayerScore());
    } else if (
      playerSelection == "scissors" &&
      computerSelection == "rock"
    ) {
      console.log("You fail, Rock beats Scissors");
      updateComputerScore(1);
      console.log("Computer Score is:", getComputerScore());
    } else if (
      playerSelection  == "scissors" &&
      computerSelection == "papper"
    ) {
      console.log("You won; scissors beats papper");
      updatePlayerScore(1);
      console.log("Your Score is", getPlayerScore());
    } else if (
      playerSelection == "papper" &&
      computerSelection == "scissors"
    ) {
      console.log("You fail, scissors beats papper");
      updateComputerScore(1);
      console.log("Computer Score is:", getComputerScore());
    } else if (
      playerSelection == "papper" &&
      computerSelection == "rock"
    ) {
      console.log("You won, papper beats rock");
      updatePlayerScore(1);
      console.log("Your Score is", getPlayerScore());
    } else if (
      playerSelection  == "rock" &&
      computerSelection == "papper"
    ) {
      console.log("You fail, papper beats rock");
      updateComputerScore(1);
      console.log("Computer Score is:", getComputerScore());
    } else if (computerSelection == "rock" && playerSelection == "rock") {
      if (playerSelection && computerSelection == "rock") {
        console.log("A tie, Play Again");
        const playerSelection = prompt("Shoot").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playGame(playerSelection, computerSelection));
      }
    } else if (
      playerSelection == "papper" &&
      computerSelection == "papper"
    ) {
      if (playerSelection && computerSelection == "papper") {
        console.log("A tie, Play Again");
        const playerSelection = prompt("Shoot").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playGame(playerSelection, computerSelection));
      }
    } else if (
      playerSelection == "scissors" &&
      computerSelection == "scissors"
    ) {
      if (playerSelection && computerSelection == "scissors") {
        // console.log("A tie, Play Again");
        // const playerSelection = prompt("Shoot").toLowerCase();
        // const computerSelection = getComputerChoice();
        // console.log(playGame(playerSelection, computerSelection));
      }
    } else if (playerSelection == null) {
      console.log("You Cancel The Game, Good Bye");
    } else {
      console.log(
        "Please Enter a valid input: (Rock or Papper or Scissors)"
      );
    }
  }

let rock = document.querySelector('#rock')
let papper = document.querySelector('#papper')
let scissors = document.querySelector('#scissors')
let playerSelection = null
function returnPlayerValue(e){
  playerSelection = e.target.value
  console.log("Hey I am ", playerSelection)
}


  for (let i = 0; i < 5; i++) {
    rock.addEventListener('click', returnPlayerValue)
    papper.addEventListener('click', returnPlayerValue)
    scissors.addEventListener('click', returnPlayerValue) 

    const computerSelection = getComputerChoice();
    
    return (playGame(playerSelection, computerSelection));
  }
  if (getPlayerScore() > getComputerScore()) {
    console.log("You won! Your final score is ", getPlayerScore());
  } else if (getPlayerScore() === getComputerScore()) {
    console.log(
      "You both have same  Your Score ",
      getPlayerScore(),
      "Computer Score ",
      getComputerScore()
    );
  } else if (getComputerScore() > getPlayerScore()) {
    console.log("You fail! Your final score is ", getPlayerScore());
  }
}
console.log(game());