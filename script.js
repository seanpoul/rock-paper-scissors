let compNum;
let playerChoice;
let compChoice;
let playerScore = 0;
let compScore = 0;
const body = document.body;
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorBtn = document.createElement('button');
const div = document.createElement('div');

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
    randomNum();
    computerPlay();
    console.log(playerChoice)
    console.log(compChoice)
    if (playerChoice === compChoice) {
        div.textContent = `Its a draw! Player score is ${playerScore}. Computer score is ${compScore}.`;
    }
    else if (playerChoice === "rock" && compChoice === "paper") {
        compAdd();
        div.textContent = `You lose! Player score is ${playerScore}. Computer score is ${compScore}.`;
        compTotal();
    }
    else if (playerChoice === "rock" && compChoice === "scissor") {
        playerAdd();
        div.textContent = `You win! Player score is ${playerScore}. Computer score is ${compScore}.`;
        playerTotal();
    }
    else if (playerChoice === "paper" && compChoice === "rock") {
        playerAdd();
        div.textContent = `You win! Player score is ${playerScore}. Computer score is ${compScore}.`;
        playerTotal();
    }
    else if (playerChoice === "paper" && compChoice === "scissor") {
        compAdd();
        div.textContent = `You lose! Player score is ${playerScore}. Computer score is ${compScore}.`;
        compTotal();
    }
    else if (playerChoice === "scissor" && compChoice === "rock") {
        compAdd();
        div.textContent = `You lose! Player score is ${playerScore}. Computer score is ${compScore}.`;
        compTotal();
    }
    else if (playerChoice === "scissor" && compChoice === "paper") {
        playerAdd();
        div.textContent = `You win! Player score is ${playerScore}. Computer score is ${compScore}.`;
        playerTotal();
    }
    else {
        div.textContent = "Invalid";
    }

}

function playerAdd(){
    playerScore = playerScore + 1;
}

function compAdd(){
    compScore = compScore + 1;
}

function playerTotal() {
    if (playerScore === 5) {
        div.textContent = "";
        alert("Player was first to 5 points. You Won!");
        playerScore = 0;
        compScore = 0;
    }
}

function compTotal() {
    if (compScore === 5) {
        div.textContent = "";
        alert("Computer was first to 5 points. You Lost!");
        playerScore = 0;
        compScore = 0;
    }
}

rockBtn.addEventListener('click', playRound);
paperBtn.addEventListener('click', playRound);
scissorBtn.addEventListener('click', playRound);

body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorBtn);
body.appendChild(div);