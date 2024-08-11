function getComputerChoice(){
    let randomNumber = Math.random();
    if(randomNumber < 1/3){
        return 'rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        return 'paper';
    }
    else {return 'scissors';
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Ready? Rock, paper, or scissors?")
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        console.log("Error. Please enter rock, paper, or scissors.")
        return null;
    }
    return humanChoice;
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "Tie !";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")   
  
    ) {
      return winRound();
    } else {
      return loseRound();
    }
  }
function winRound(){
    humanScore++;
    return "You Win!"
}
function loseRound(){
    computerScore++;
    return "You Lose!"
}

for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    if (!humanSelection) {  
        console.log("Invalid choice. Round forfeited.");
        computerScore++;  
        continue;
    }
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    console.log(`Round ${i + 1}:`);
    console.log(`You chose: ${humanSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log(result);
    console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    console.log('----------------------------------------');
}

if (humanScore > computerScore) {
  alert("Congratulations! You won the game with a score of " + humanScore + " to " + computerScore);
} else if (humanScore < computerScore) {
  alert("You lost the game. The computer won with a score of " + computerScore + " to " + humanScore);
} else {
  alert("It's a tie! Both you and the computer scored " + humanScore);
}