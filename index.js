const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
let displayGameStatus = document.querySelector(".displayGameStatus");

let displayStatus = document.createElement("p");
displayStatus.style.fontSize = "20px";
displayStatus.style.color = "rgb(240, 223, 238)";
displayStatus.style.fontWeight = 900;
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
  let PlayerScoreStatus = document.querySelector(".playerStatus");
  function getPlayerScore() {
    return PlayerScore;
  }
  // End
  // This functions will store and update computer score
  let computerScore = 0;
  function updateComputerScore(point) {
    computerScore += point;
  }
  let ComputerScoreStatus = document.querySelector(".computerStatus");
  function getComputerScore() {
    return computerScore;
  }
  //End

  function playGame(playerSelection, computerSelection) {
    console.log(`Player selected: ${playerSelection}`);
    console.log(`Computer selected: ${computerSelection}`);

    if (playerSelection == "rock" && computerSelection == "scissors") {
      updatePlayerScore(1);

      displayStatus.textContent = "You won, Rock beats Scissors.";
      displayGameStatus.appendChild(displayStatus);
      PlayerScoreStatus.textContent = `Your Score is: ${getPlayerScore()}`;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      updateComputerScore(1);

      displayStatus.textContent = "You fail, Rock beats Scissors";
      displayGameStatus.appendChild(displayStatus);
      ComputerScoreStatus.textContent = `Computer Score is: ${getComputerScore()}`;
    } else if (playerSelection == "scissors" && computerSelection == "papper") {
      updatePlayerScore(1);
      displayStatus.textContent = "You won, scissors beats papper.";
      displayGameStatus.appendChild(displayStatus);
      PlayerScoreStatus.textContent = `Your Score is: ${getPlayerScore()}`;
    } else if (playerSelection == "papper" && computerSelection == "scissors") {
      updateComputerScore(1);
      displayStatus.textContent = "You fail, scissors beats papper";
      displayGameStatus.appendChild(displayStatus);
      ComputerScoreStatus.textContent = `Computer Score is: ${getComputerScore()}`;
    } else if (playerSelection == "papper" && computerSelection == "rock") {
      updatePlayerScore(1);
      displayStatus.textContent = "You won, papper beats rock.";
      displayGameStatus.appendChild(displayStatus);
      PlayerScoreStatus.textContent = `Your Score is: ${getPlayerScore()}`;
    } else if (playerSelection == "rock" && computerSelection == "papper") {
      updateComputerScore(1);
      displayStatus.textContent = "You fail, papper beats rock.";
      displayGameStatus.appendChild(displayStatus);
      ComputerScoreStatus.textContent = `Computer Score is: ${getComputerScore()}`;
    } else if (computerSelection == "rock" && playerSelection == "rock") {
      if (playerSelection && computerSelection == "rock") {
        displayStatus.textContent = "A tie, Play Again. Rock & Rock";
        displayGameStatus.appendChild(displayStatus);
      }
    } else if (playerSelection == "papper" && computerSelection == "papper") {
      if (playerSelection && computerSelection == "papper") {
        displayStatus.textContent = "A tie, Play Again. papper & papper";
        displayGameStatus.appendChild(displayStatus);
      }
    } else if (
      playerSelection == "scissors" &&
      computerSelection == "scissors"
    ) {
      if (playerSelection && computerSelection == "scissors") {
        displayStatus.textContent = "A tie, Play Again. scissors & scissors";
        displayGameStatus.appendChild(displayStatus);
      }
    }
  }

  function handleButtonClick(event) {
    let playerSelection = event.target.textContent;
    let computerSelection = getComputerChoice();
    let displayWins = document.querySelector(".displayWins");
    displayWins.style.fontSize = "30px";
    // Call the playGame function with the playerSelection and computerSelection
    playGame(playerSelection, computerSelection);

    if (getPlayerScore() == 5 || getComputerScore() == 5) {
      if (getPlayerScore() == 5) {
        displayWins.textContent = `You won! Your final score is ${getPlayerScore()} and Computer's own is ${getComputerScore()}`;
      } else if (getComputerScore() == 5) {
        displayWins.textContent = `You fail! Computer's final score is ${getComputerScore()} and Yours is ${getPlayerScore()}`;
      }
      PlayerScore = 0;
      computerScore = 0;
    }
  }

  // add event listener to the button
  rockButton.addEventListener("click", handleButtonClick);
  paperButton.addEventListener("click", handleButtonClick);
  scissorsButton.addEventListener("click", handleButtonClick);
}
console.log(game());
