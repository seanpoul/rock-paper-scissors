let compNum;
let compChoice;
let playerScore = 0;
let playerChoice;
let compScore = 0;

game();

if (playerScore > compScore) {
    console.log(`Final score of ${playerScore}! You Win!`)
}
else if (playerScore < compScore) {
    console.log(`Final score of ${playerScore}! You Lose!`)
}
else {
    console.log(`Final score of ${playerScore}! You Draw!`)
}


function game() {
    for (let i = 0; i < 5; i++) {
        let choice = prompt("Choose: rock, paper or scissor");
        playerChoice = choice.toLowerCase();
        randomNum();
        computerPlay();
        let result = playRound();
        console.log(result);
        if (result === "You win!") {
            playerScore = playerScore + 1;
        }
        else if (result === "You lose!") {
            compScore = compScore + 1;
        }
        else if (result === "Invalid") {
            i = i - 1
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
    else {
        return "Invalid";
    }
}
