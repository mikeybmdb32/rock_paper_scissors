//ROCK/PAPER/SCISSORS GAME
//first to 5 successful rounds of play wins

let userScore = 0;
let computerScore = 0;
let clickEvent;
let roundwinner;
const rpsButtons = document.querySelectorAll('.rpsButton');
//when user clicks rock/paper/scissors buttons, play game
rpsButtons.forEach(rpsButton => rpsButton.addEventListener('click', function(clickEvent) {;
    if (['rock', 'paper', 'scissors'].includes(clickEvent.target.id)) {
        roundWinner = getRoundWinner(clickEvent.target.id);
        if (roundWinner == 'user') userScore++;
        if (roundWinner == 'computer') computerScore++;
        //first to 5 successful plays wins; scores are reset after winner of game is determined
        if (userScore >= 5 || computerScore >= 5) {
            displayGameWinner(userScore, computerScore);
            userScore = 0;
            computerScore = 0;
        }
    }
}));

//display winner of current round of overall game
function displayGameWinner(userScore, computerScore) {
    if (userScore > computerScore) console.log(`User wins!`);
    if (userScore < computerScore) console.log(`Computer wins!`);
    else console.log(`It's a tie!`);
    console.log(`User Score:${userScore}  Computer Score:${computerScore}`);
}

//display winner of current round of play
function displayRoundWinner(userPlay, computerPlay, winner) {
    console.log(`
    User Choice: ${userPlay}
    Computer Choice:  ${computerPlay}
    Round Winner:  ${winner}`);
}

//use current system time, in milliseconds, to generate random number 0-999
function getRandomNum() {
    let time = new Date();
    return time.getMilliseconds();
}

//generate computer's play
function getComputerPlay() {
    randomNum = getRandomNum();
    if (randomNum <= 333) return 'rock'
    else if (randomNum > 333 && randomNum <= 666) return 'paper'
    else return 'scissors'
}

//determine winner of individual round of play
function getRoundWinner(userPlay) {
    let computerPlay = getComputerPlay();
    let winner;
    if (userPlay == computerPlay) winner = 'tie'
    if (userPlay == 'scissors') {
        if (computerPlay == 'paper') winner = 'user'
        if (computerPlay == 'rock') winner = 'computer'
    }
    if (userPlay == 'paper') {
        if (computerPlay == 'rock') winner = 'user'
        if (computerPlay == 'scissors') winner = 'computer'
    }
    if (userPlay == 'rock') {
        if (computerPlay == 'scissors') winner = 'user'
        if (computerPlay == 'paper') winner = 'computer'
    }
    displayRoundWinner(userPlay, computerPlay, winner);
    return winner;
}