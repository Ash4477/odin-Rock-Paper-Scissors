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

function getResult(playerCount, compCount) {
    const matchResultText  = document.createElement("p");
    if (playerCount > compCount) {     
        matchResultText.textContent = "Congrats, You Won The Match!";
    }
    else if (playerCount < compCount) {
        matchResultText.textContent = "You Lost, Better Luck Next Time!";
    }
    else{
        matchResultText.textContent = "It's a Tie!";
    }

    return matchResultText;
}

function playRound(playerSelection, computerSelection) {

    console.log(`Your Choice: ${playerSelection}\nComputer's Choice: ${computerSelection}`);
    const roundResultText = document.createElement("p");

    if (playerSelection == computerSelection) {
        roundResultText.textContent = "It's a Tie";
    }

    else if (
         ((playerSelection == "ROCK") && (computerSelection == "PAPER")) || 
         ((playerSelection == "PAPER") && (computerSelection == "SCISSORS")) || 
         ((playerSelection == "SCISSORS") && (computerSelection == "ROCK"))
         ) {
            roundResultText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
         }
    else {
        roundResultText.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    return roundResultText;
}

function playGame() {
    let playerCount = 0;
    let compCount = 0;
    let playerSelection;

    const rockButton = document.createElement("button");
    const paperButton = document.createElement("button");
    const scissorsButton = document.createElement("button");

    rockButton.addEventListener("click", playRound("ROCK", getComputerChoice()));
    paperButton.addEventListener("click", playRound("PAPER", getComputerChoice()));
    scissorsButton.addEventListener("click", playRound("SCISSORS", getComputerChoice()));

    const resultBox = document.createElement("div");

    const body = document.querySelector("body");
    body.appendChild(rockButton);
    body.appendChild(paperButton);
    body.appendChild(scissorsButton);
    body.appendChild(resultBox);

    const resultString = playRound(playerSelection, getComputerChoice());
    const checkString = resultString.substring(4,7);
    if (checkString == "Win") {
        playerCount++;
    }
    else if (checkString == "Los") {
        compCount++;
    }
    
    console.log(resultString);
    console.log(`Score:\nPlayer: ${playerCount}\nComputer: ${compCount}`);
}

  
playGame();