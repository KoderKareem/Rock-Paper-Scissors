const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
let displayGameStatus = document.querySelector('.displayGameStatus')
const playerBtn = document.querySelectorAll('.playerBtn')
let displayStatus = document.createElement('p')
// let displayPlayerStatus = document.createElement('p');

function game() {
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
  let PlayerScoreStatus = document.createElement('p')
  function getPlayerScore() {
    return PlayerScore;
  }
  // End
  // This functions will store and update computer score
  let computerScore = 0;
  function updateComputerScore(point) {
    computerScore += point;
  }
  let ComputerScoreStatus = document.createElement('p')
  function getComputerScore() {
    return computerScore;
  }
  //End

  
  function playGame(playerSelection, computerSelection) {
  
    console.log(`Player selected: ${playerSelection}`);
    console.log(`Computer selected: ${computerSelection}`);

    if (playerSelection == "rock" && computerSelection == "scissors") {
      updatePlayerScore(1);
     
      displayStatus.textContent = "You won, Rock beats Scissors. Your Score is "
      displayGameStatus.appendChild(displayStatus)
      PlayerScoreStatus.textContent = `Your Score is: ${getPlayerScore()}`
      displayGameStatus.appendChild(PlayerScoreStatus)
      
  
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      updateComputerScore(1);
     
      displayStatus.textContent = 'You fail, Rock beats Scissors'
      displayGameStatus.appendChild(displayStatus)
      ComputerScoreStatus.textContent = `Computer Score is: ${getComputerScore()}`
      displayGameStatus.appendChild(ComputerScoreStatus)
    } else if (playerSelection == "scissors" && computerSelection == "papper") {
      updatePlayerScore(1);
      displayStatus.textContent = "You won, scissors beats papper."
      displayGameStatus.appendChild(displayStatus)
      PlayerScoreStatus.textContent = `Your Score is: ${getPlayerScore()}`
      displayGameStatus.appendChild(PlayerScoreStatus)
    } else if (playerSelection == "papper" && computerSelection == "scissors") {
      updateComputerScore(1);
      displayStatus.textContent = 'You fail, scissors beats papper'
      displayGameStatus.appendChild(displayStatus)
      ComputerScoreStatus.textContent = `Computer Score is: ${getComputerScore()}`
      displayGameStatus.appendChild(ComputerScoreStatus)
    } else if (playerSelection == "papper" && computerSelection == "rock") {
      updatePlayerScore(1);
      displayStatus.textContent = "You won, papper beats rock."
      displayGameStatus.appendChild(displayStatus)
      PlayerScoreStatus.textContent = `Your Score is: ${getPlayerScore()}`
      displayGameStatus.appendChild(PlayerScoreStatus)
      
    } else if (playerSelection == "rock" && computerSelection == "papper") {
      updateComputerScore(1);
      displayStatus.textContent = "You fail, papper beats rock."
      displayGameStatus.appendChild(displayStatus)
      ComputerScoreStatus.textContent = `Computer Score is: ${getComputerScore()}`
      displayGameStatus.appendChild(ComputerScoreStatus)
    } else if (computerSelection == "rock" && playerSelection == "rock") {
      if (playerSelection && computerSelection == "rock") {
        displayStatus.textContent = "A tie, Play Again. Rock & Rock"
        displayGameStatus.appendChild(displayStatus)
        rockButton.addEventListener("click", handleButtonClick);
        paperButton.addEventListener("click", handleButtonClick);
        scissorsButton.addEventListener("click", handleButtonClick);
      }
    } else if (playerSelection == "papper" && computerSelection == "papper") {
      if (playerSelection && computerSelection == "papper") {
        displayStatus.textContent = "A tie, Play Again. papper & papper"
        displayGameStatus.appendChild(displayStatus)
        rockButton.addEventListener("click", handleButtonClick);
        paperButton.addEventListener("click", handleButtonClick);
        scissorsButton.addEventListener("click", handleButtonClick);
      }
    } else if (
      playerSelection == "scissors" &&
      computerSelection == "scissors"
    ) {
      if (playerSelection && computerSelection == "scissors") {
        displayStatus.textContent = "A tie, Play Again. scissors & scissors"
        displayGameStatus.appendChild(displayStatus)
        rockButton.addEventListener("click", handleButtonClick);
        paperButton.addEventListener("click", handleButtonClick);
        scissorsButton.addEventListener("click", handleButtonClick);
      }
    
      
    }
  }



  function handleButtonClick(event) {
    let playerSelection = event.target.textContent;
    let computerSelection = getComputerChoice();
    let  won = document.createElement('p')
    // Call the playGame function with the playerSelection and computerSelection
    playGame(playerSelection, computerSelection);

    if (getPlayerScore() == 5 && getComputerScore() < 5) {
      won.textContent = `You won! Your final score is " ${getPlayerScore()}` 
     displayGameStatus.appendChild(won)
    } else if (getComputerScore() == 5 && getPlayerScore() < 5) {
      won.textContent = `You fail! Computer final score is " ${getComputerScore()}` 
      displayGameStatus.appendChild(won)
    }
    
    
  }

  

  // if (getPlayerScore() == 5 && getPlayerScore() > getComputerScore()) {
  //   console.log("You won! Your final score is ", getPlayerScore());
  // } else if (getComputerScore() == 5 && getComputerScore > getPlayerScore()) {
  //   console.log("You fail! Your final score is ", getPlayerScore());
  // }

  // add event listener to the button
  rockButton.addEventListener("click", handleButtonClick);
  paperButton.addEventListener("click", handleButtonClick);
  scissorsButton.addEventListener("click", handleButtonClick);
 
  
}
console.log(game());
