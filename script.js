function getComputerChoice() {
    const max = 3;
    const min = 1;
    const rand = Math.floor(Math.random()* (max-min)) + min;
    switch (rand) {
        case 1: 
        return "Rock";

        case 2:
            return "Paper";
        
        case 3:
            return "Scissors";
    }
}