function getComputerChoice() {

    // This will either give 0, or 1, or 2
    const rand = Math.floor(Math.random()* (3));
    
    console.log(rand);

    if (rand == 0){
        return "Rock";
    }

    else if (rand == 1) {
        return "Paper";
    }

    else{
        return "Scissors";
    }
}