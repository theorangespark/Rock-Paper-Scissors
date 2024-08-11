function getComputerChoice(){
    let randomNumber = Math.random();
    if(randomNumber < 1/3){
        return 'Rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        return 'Paper';
    }
    else return 'Scissors';
}

function getHumanChoice(){
    let humanChoice = prompt("Ready? Rock, paper, or scissors?")
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        console.log("Error. Please enter rock, paper, or scissors.")
        return getHumanChoice();
    }
}
