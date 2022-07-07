let compNum
let compChoice
let choice = prompt("Choose: rock, paper or scissor")
let playerChoice = choice.toLowerCase();

console.log(playerChoice);

function randomNum() {
    compNum = Math.floor(Math.random() * 3) + 1
    console.log(compNum)
}

function computerPlay() {
    if (compNum === 1) {
        compChoice = "rock";
        console.log(compChoice)
    }
    else if (compNum === 2) {
        compChoice = "paper";
        console.log(compChoice)
    }
    else {
        compChoice = "scissor";
        console.log(compChoice)
    }
}

function winner() {
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

randomNum();
computerPlay();
let win = winner();

console.log(win);
