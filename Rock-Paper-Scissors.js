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
        if (userScore >= 5 || computerScore >= 5) {
            resetGameScreen();
        }
        if (roundWinner == 'user') userScore++;
        if (roundWinner == 'computer') computerScore++;
        updateScreenScores(userScore, computerScore);
        //first to 5 successful plays wins; scores are reset after winner of game is determined
        if (userScore >= 5 || computerScore >= 5) {
            displayGameWinner();
        }
    }
}));

function resetGameScreen() {
    userScore = 0;
    computerScore = 0;
    document.getElementById("gameWinner").innerHTML = null;
    
}

function updateScreenScores(userScore, computerScore) {
    document.getElementById("userScore").innerHTML = userScore;
    document.getElementById("computerScore").innerHTML = computerScore;
}


//display winner of current round of overall game
function displayGameWinner(userScore, computerScore) {
    if (userScore > computerScore) document.getElementById("gameWinner").innerHTML = "User Wins!";
    if (userScore < computerScore) document.getElementById("gameWinner").innerHTML = "Computer Wins!";
    else document.getElementById("gameWinner").innerHTML = "It's a Tie!";
}



//MAKE THIS DISPLAY; TRIED TO MAKE IT ALL SHOW UP AT ONCE, BUT IT DOESN'T SEEM TO WORK
//display winner of current round of play
function displayRoundWinner(userPlay, computerPlay, roundWinner) {
    document.getElementById("userPlay").innerHTML = userPlay;
    document.getElementById("computerPlay").innerHTML = computerPlay;
    document.getElementById("roundWinner").innerHTML = roundWinner;
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
    let roundWinner;
    if (userPlay == computerPlay) roundWinner = 'tie'
    if (userPlay == 'scissors') {
        if (computerPlay == 'paper') roundWinner = 'user'
        if (computerPlay == 'rock') roundWinner = 'computer'
    }
    if (userPlay == 'paper') {
        if (computerPlay == 'rock') roundWinner = 'user'
        if (computerPlay == 'scissors') roundWinner = 'computer'
    }
    if (userPlay == 'rock') {
        if (computerPlay == 'scissors') roundWinner = 'user'
        if (computerPlay == 'paper') roundWinner = 'computer'
    }
    displayRoundWinner(userPlay, computerPlay, roundWinner);
    return roundWinner;
}