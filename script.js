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

function updateGameStatus(playerSelection, playerCount, compCount) {

    const roundResultText = document.createElement("p");
    const scoreText = document.createElement("p");

    roundResultText = playRound(playerSelection, getComputerChoice());

    const checkString = roundResultText.getTextContent().substring(4,7);
    if (checkString == "Win") {
        playerCount++;
    }
    else if (checkString == "Los") {
        compCount++;
    }
    
    scoreText = `Player: ${playerCount} Computer: ${compCount}`;

    return [roundResultText, scoreText, playerCount, compCount];
}

function checkMatchScore(playerCount, compCount) {
    if (playerCount == 5) {
        return 1; //    Win
    }

    else if (compCount == 5) {
        return -1; //   Lose
    }

    else {
        return 0;   //  Match hasn't ended yet
    }
}

function resetGame(result) {
    const resetBoard = document.createElement("div");
    const finalResult = document.createElement("p");
    const resetButton  = document.createElement("button");
    resetButton.textContent = "Reset";

    if (result === 1) {
        finalResult.textContent = "You Won The Match!";
    }

    else {
        finalResult.textContent = "You Lost The Match";
    }

    resetBoard.appendChild(finalResult);
    resetBoard.appendChild(resetButton);
    const body = document.querySelector("body");
    body.appendChild(resetBoard);
}

function playGame() {
    const rockButton = document.createElement("button");
    const paperButton = document.createElement("button");
    const scissorsButton = document.createElement("button");

    const resultBox = document.createElement("div");
    let roundResultText;
    let scoreText;

    let playerCount = 0;
    let compCount = 0;

    rockButton.addEventListener("click", () => {
        [roundResultText, scoreText, playerCount, compCount] = updateGameStatus("ROCK", playerCount, compCount);
        let gameCheck = checkMatchScore(playerCount, compCount);
        if (gameCheck !== 0) {
            resetGame(gameCheck);
        }
    });
    paperButton.addEventListener("click", () => {
        [roundResultText, scoreText, playerCount, compCount] = updateGameStatus("PAPER", playerCount, compCount);
        checkMatchScore(playerCount, compCount);
        if (gameCheck !== 0) {
            resetGame(gameCheck);
        }
    });
    scissorsButton.addEventListener("click", () => {
        [roundResultText, scoreText, playerCount, compCount] = updateGameStatus("SCISSORS", playerCount, compCount);
        checkMatchScore(playerCount, compCount);
        if (gameCheck !== 0) {
            resetGame(gameCheck);
        }
    });

    resultBox.appendChild(resultText);
    resultBox.appendChild(scoreText);
    const body = document.querySelector("body");
    body.appendChild(rockButton);
    body.appendChild(paperButton);
    body.appendChild(scissorsButton);
    body.appendChild(resultBox);
}

playGame();