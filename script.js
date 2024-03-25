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
    let roundResultText;

    if (playerSelection == computerSelection) {
        roundResultText= "It's a Tie";
    }

    else if (
         ((playerSelection == "ROCK") && (computerSelection == "PAPER")) || 
         ((playerSelection == "PAPER") && (computerSelection == "SCISSORS")) || 
         ((playerSelection == "SCISSORS") && (computerSelection == "ROCK"))
         ) {
            roundResultText = `You Lose! ${computerSelection} beats ${playerSelection}`;
         }
    else {
        roundResultText = `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    return roundResultText;
}

function updateGameStatus(playerSelection, playerCount, compCount) {

    let roundResultText;
    let scoreText;

    roundResultText = playRound(playerSelection, getComputerChoice());

    const checkString = roundResultText.substring(4,7);
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

    resetBoard.addEventListener("click", () => {
        location.reload();
    })

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
    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");

    const resultBox = document.createElement("div");
    let roundResultText = document.createElement("p");
    let scoreText = document.createElement("p");

    let playerCount = 0;
    let compCount = 0;

    rockButton.addEventListener("click", () => {
        [roundResultText.textContent, scoreText.textContent, playerCount, compCount] = updateGameStatus("ROCK", playerCount, compCount);
        let gameCheck = checkMatchScore(playerCount, compCount);
        if (gameCheck !== 0) {
            resetGame(gameCheck);
        }
    });
    paperButton.addEventListener("click", () => {
        [roundResultText.textContent, scoreText.textContent, playerCount, compCount] = updateGameStatus("PAPER", playerCount, compCount);
        checkMatchScore(playerCount, compCount);
        if (gameCheck !== 0) {
            resetGame(gameCheck);
        }
    });
    scissorsButton.addEventListener("click", () => {
        [roundResultText.textContent, scoreText.textContent, playerCount, compCount] = updateGameStatus("SCISSORS", playerCount, compCount);
        checkMatchScore(playerCount, compCount);
        if (gameCheck !== 0) {
            resetGame(gameCheck);
        }
    });
    console.log(typeof scoreText);

    resultBox.appendChild(roundResultText);
    resultBox.appendChild(scoreText);

    const mainScreen = document.querySelector("body");
    mainScreen.appendChild(resultBox);
}


const mainScreen = document.querySelector("main"); 

const startButton = document.createElement("button");
startButton.textContent = "Play";
startButton.addEventListener("click", () => {
    startButton.parentNode.removeChild(startButton);
    const choiceBox = document.querySelectorAll(".choice-box");
    choiceBox.forEach(function(box){
        box.setAttribute("style", "visibility: visible;")
    });
    playGame();
});
startButton.setAttribute("style",
"position: absolute; font-style: italic; font-size: 2rem; padding: 1rem 4rem; font-family: \"Lilita One\", sans-serif;"
)

mainScreen.appendChild(startButton);