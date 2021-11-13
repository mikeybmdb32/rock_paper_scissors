//ROCK/PAPER/SCISSORS GAME

game();

//play 5 rounds of rock paper scissors
//game winner is whoever won the most rounds
function game(){
    let userScore = 0;
    let computerScore = 0;
    for(i=1; i <= 5; i++){
        roundWinner = determineRoundWinner();
        if(roundWinner == "user") userScore++;
        if(roundWinner == "computer") computerScore++;
    }

    displayGameWinner(userScore, computerScore);
}


function displayGameWinner(userScore, computerScore){
    if(userScore > computerScore) console.log(`User wins!`);
    if(userScore < computerScore) console.log(`Computer wins!`);
    else console.log(`It's a tie!`);
    console.log(`User Score:${userScore}  Computer Score:${computerScore}`);
}

function determineRoundWinner(){
    let userPlay = window.prompt("Choose rock, paper, or scissors").toLowerCase();
    while(userPlay != "rock" && userPlay != "paper" && userPlay != "scissors"){
        userPlay = window.prompt("Invalid selection.  Choose rock, paper, or scissors").toLowerCase()
    }
    let computerPlay = computerPlayGen();
    let winner = winnerGen(userPlay,computerPlay)
    displayRoundWinner(userPlay,computerPlay, winner);
    return winner;
}

function displayRoundWinner(userPlay,computerPlay, winner){
    console.log(`
    User Choice: ${userPlay}
    Computer Choice:  ${computerPlay}
    Round Winner:  ${winner}`);
}

//  use current time, in milliseconds, to generate random number 0-999
function randomNumGen() {
    let time = new Date();
    return time.getMilliseconds();
}

//generate computer's play
function computerPlayGen() {
    randomNum = randomNumGen();
    if(randomNum <= 333) return "rock"
    else if (randomNum > 333 && randomNum <= 666) return "paper"
    else return "scissors"
}


//generate winner
function winnerGen(userPlay, computerPlay){
    if(userPlay == computerPlay) return "tie"
    if(userPlay == "scissors"){
        if(computerPlay == "paper") return "user"
        if(computerPlay == "rock") return "computer"
    }
    if(userPlay == "paper"){
        if(computerPlay == "rock") return "user"
        if(computerPlay == "scissors") return "computer"
    }
    if(userPlay == "rock"){
        if(computerPlay == "scissors") return "user"
        if(computerPlay == "paper") return "computer"
    }
}





//print computer selection, user selection, and winner message
//perform for 5 rounds


