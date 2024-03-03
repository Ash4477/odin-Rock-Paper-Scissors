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

function playGame() {
    let playerCount = 0;
    let compCount = 0;
    
    for (let i = 0; i < 5; i++) {
        let playerSelection;
        while (true){
        playerSelection = prompt("Choose: Rock, Paper, or Scissors");
        playerSelection = playerSelection.toUpperCase();
        if ((playerSelection == "ROCK") ||
            (playerSelection == "PAPER") ||
            (playerSelection == "SCISSORS")) {
                break;
            }
        else {
            console.log("Invalid Input!\nEnter Again");
        }
        }
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

    if (playerCount > compCount) {
        console.log("Congrats, You Won! :>");
    }
    else if (playerCount < compCount) {
        console.log("You Lost, Better Luck Next Time! :<");
    }
    else{
        console.log("It's a Tie! :O");
    }
}
  
console.log(playGame());