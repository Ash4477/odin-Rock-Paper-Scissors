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

    const compChoiceText = document.querySelector("#comp-choice");
    compChoiceText.textContent = "Comp's Choice: " + (computerSelection.toLowerCase().replace(/^\w/, c => c.toUpperCase()));

    const compChoiceImg = document.querySelector("#comp-choice-img");
    compChoiceImg.innerHTML = `<img src = "./images/${computerSelection.toLowerCase()}.png"></img>`;

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
    if (playerCount >= 5 ) {
        return 1; //    Win
    }

    else if (compCount >= 5) {
        return -1; //   Lose
    }

    else {
        return 0;   //  Match hasn't ended yet
    }
}

function resetGame(result) {

    const body = document.body;
    while(body.firstChild){
        body.removeChild(body.firstChild);
    }

    const resetBoard = document.createElement("div");
    const finalResult = document.createElement("p");
    const resetButton  = document.createElement("button");
    resetButton.textContent = "Main Menu";
    resetBoard.id = "resetBoard";
    resetButton.setAttribute("style",
    "margin-top: 30px; font-size: 2rem; padding: 1rem 4rem; font-family: 'Lilita One', sans-serif;"
    )

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

    body.setAttribute("id", "newBody");
    body.appendChild(resetBoard);
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function compChoicesAnimation() {
    const compChoices = document.querySelectorAll(".choices.comp button");
    compChoices.forEach((option, index) => {
        setTimeout(() => {
        option.classList.add('highlight');
        // Remove highlight class after 1 second
        setTimeout(() => {
            option.classList.remove('highlight');
        }, 200);
        }, index * 200); // Change background every second
    });
}

function playGame() {
    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");

    const choiceText = document.createElement("p");
    const choiceBox = document.querySelector(".choice-box");
    choiceBox.appendChild(choiceText);

    const compChoiceText = document.createElement("p");
    compChoiceText.id = "comp-choice";
    const compChoiceBox = document.querySelector(".choice-box:last-child");
    compChoiceBox.appendChild(compChoiceText);

    const resultBox = document.createElement("div");

    let roundResultText = document.createElement("p");
    let scoreText = document.createElement("p");

    let playerCount = 0;
    let compCount = 0;

    rockButton.addEventListener("click", () => {

        choiceText.textContent = "Your Choice: Rock";

        [roundResultText.textContent, scoreText.textContent, playerCount, compCount] = updateGameStatus("ROCK", playerCount, compCount);
        let gameCheck = checkMatchScore(playerCount, compCount);
        if (gameCheck !== 0) {
            resetGame(gameCheck);
        }
    });

    paperButton.addEventListener("click", () => {
        choiceText.textContent = "Your Choice: Paper";

        [roundResultText.textContent, scoreText.textContent, playerCount, compCount] = updateGameStatus("PAPER", playerCount, compCount);
        let gameCheck = checkMatchScore(playerCount, compCount);
        if (gameCheck !== 0) {
            resetGame(gameCheck);
        }
    });

    scissorsButton.addEventListener("click", () => {
        choiceText.textContent = "Your Choice: Scissors";

        [roundResultText.textContent, scoreText.textContent, playerCount, compCount] = updateGameStatus("SCISSORS", playerCount, compCount);
        let gameCheck = checkMatchScore(playerCount, compCount);
        if (gameCheck !== 0) {
            resetGame(gameCheck);
        }
    });

    resultBox.style.fontSize = "2rem";
    resultBox.appendChild(roundResultText);
    resultBox.appendChild(scoreText);

    const body = document.querySelector("body");
    body.style.textAlign = "center";
    body.appendChild(resultBox);
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
