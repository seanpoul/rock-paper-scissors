let compNum;
let playerChoice;
let compChoice;
let playerScore = 0;
let compScore = 0;

const body = document.body;
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorBtn = document.createElement('button');

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorBtn.textContent = "Scissor";

rockBtn.addEventListener('click', updateRock);
paperBtn.addEventListener('click', updatePaper);
scissorBtn.addEventListener('click', updateScissor);

function updateRock() {
    playerChoice = "rock"
}

function updatePaper() {
    playerChoice = "paper"
}

function updateScissor() {
    playerChoice = "scissor"
}

if (playerScore > compScore) {
    console.log(`Final score of ${playerScore}! You Win!`)
}
else if (playerScore < compScore) {
    console.log(`Final score of ${playerScore}! You Lose!`)
}
else {
    console.log(`Final score of ${playerScore}! You Draw!`)
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

let result = function playRound() {
    let choice = playerChoice;
    randomNum();
    computerPlay();
    if (rockBtn.textContent === compChoice) {
        return "Its a draw!";
    }
    else if (playerChoice === "rock" && compChoice === "paper") {
        compScore = compScore + 1;
        return "You lose!";
    }
    else if (playerChoice === "rock" && compChoice === "scissor") {
        playerScore = playerScore + 1;
        return "You win!";
    }
    else if (playerChoice === "paper" && compChoice === "rock") {
        playerScore = playerScore + 1;
        return "You win!";
    }
    else if (playerChoice === "paper" && compChoice === "scissor") {
        compScore = compScore + 1;
        return "You lose!";
    }
    else if (playerChoice === "scissor" && compChoice === "rock") {
        compScore = compScore + 1;
        return "You lose!";
    }
    else if (playerChoice === "scissor" && compChoice === "paper") {
        playerScore = playerScore + 1;
        return "You win!";
    }
    else {
        return "Invalid";
    }
}

rockBtn.addEventListener("click", result);
paperBtn.addEventListener("click", result);
scissorBtn.addEventListener("click", result);


const div = document.createElement('div');
div.textContent = "Display results!";


body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorBtn);
body.appendChild(div);