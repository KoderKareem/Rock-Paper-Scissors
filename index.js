function getComputerChoice(word){
    let choices = ["rock", "papper", "scissors"];
    return word = choices[Math.floor(Math.random() * choices.length)];
    console.log(getComputerChoice());
}
function playGame(playerSelection, computerSelection){
    
    if    (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You won; Rock beats Scissors");
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You fail, Rock beats Scissors");
    } else if(playerSelection == "scissors" && computerSelection == "papper"){
        console.log("You won; scissors beats papper");
    } else if (playerSelection == "papper" && computerSelection == "scissors"){
        console.log("You fail, scissors beats papper");
    } else if(playerSelection == "papper" && computerSelection == "rock"){
        console.log("You won, papper beats rock");
    } else if (playerSelection == "rock" && computerSelection == "papper"){
        console.log("You fail, papper beats rock")
    } else if(computerSelection == "rock" && playerSelection == "rock"){
        console.log("A tie, Play Again");
    } else if ( playerSelection == "papper" && computerSelection == "papper"){
        console.log("A tie, Play Again");
    } else if ( playerSelection == "scissors" && computerSelection == "scissors"){
        console.log("A tie, Play Again");
    } else{
        console.log("Please Enter a valid input: (Rock or Papper or Scissors)")
    }
   
}
const playerSelection = prompt("Shoot").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playGame(playerSelection, computerSelection));
console.log(computerSelection, "Computer");
console.log(playerSelection, "Me")