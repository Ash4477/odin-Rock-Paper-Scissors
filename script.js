function getComputerChoice() {
    // This will either give 0, or 1, or 2
    const rand = Math.floor(Math.random()* (3));

    if (rand == 0){
        return "ROCK";
    }

    else if (rand == 1) {
        return "PAPER";
    }

    else{
        return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    console.log(`Your Choice: ${playerSelection}\nComputer's Choice: ${computerSelection}`);

    if (playerSelection == computerSelection) {
        return "It's a Tie";
    }

    else if (
         ((playerSelection == "ROCK") && (computerSelection == "PAPER")) || 
         ((playerSelection == "PAPER") && (computerSelection == "SCISSORS")) || 
         ((playerSelection == "SCISSORS") && (computerSelection == "ROCK"))
         ) {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
         }
    else {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
}

