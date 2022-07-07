let compNum
let compChoice
let playerScore = 0
let playerChoice
let win

let play = game();
console.log(play);

function game() {
    for (let i = 0; i < 6; i++) {
        let choice = prompt("Choose: rock, paper or scissor");
        let playerChoice = choice.toLowerCase();
        randomNum();
        playRound();
        computerPlay();
        console.log(i);
        if (win === "You win!") {
            playerScore = playerScore + 1;
        }
    }

}
function randomNum() {
    compNum = Math.floor(Math.random() * 3) + 1
}

function computerPlay() {
    if (compNum === 1) {
        compChoice = "rock";
    }
    else if (compNum === 2) {
        compChoice = "paper";
    }
    else {
        compChoice = "scissor";
    }
}

function playRound() {
    if (playerChoice === compChoice) {
        return "Its a draw!";
    }
    else if (playerChoice === "rock" && compChoice === "paper") {
        return "You lose!";
    }
    else if (playerChoice === "rock" && compChoice === "scissor") {
        return "You win!";
    }
    else if (playerChoice === "paper" && compChoice === "rock") {
        return "You win!";
    }
    else if (playerChoice === "paper" && compChoice === "scissor") {
        return "You lose!";
    }
    else if (playerChoice === "scissor" && compChoice === "rock") {
        return "You lose!";
    }
    else if (playerChoice === "scissor" && compChoice === "paper") {
        return "You win!";
    }
}


