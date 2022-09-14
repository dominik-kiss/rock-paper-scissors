function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    let choice = "";

    switch (randomNumber) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }
    return choice.toLowerCase();
}

function playRound() {

    let computerChoice = getComputerChoice();
    let playerChoice = this.id; //Get the textcontent from the button this function was called on by the event listener
    
    this.classList.add("pressed");

    currentChoice.id = `Player choice: ${playerChoice}  -  Computer choice: ${computerChoice}`;

    if (playerChoice == computerChoice) {
        currentRound.textContent = "It's a draw!"
    }

    else if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore += 1;
            currentRound.textContent = "You lose! Paper beats rock!";

        }
        else if (computerChoice == "scissors") {
            playerScore += 1;
            currentRound.textContent = "You win! Rock beats scissors!";
        }
    }

    else if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            computerScore += 1;
            currentRound.textContent = "You lose! Scissors beat paper!";
        }
        else if (computerChoice == "rock") {
            playerScore += 1;
            currentRound.textContent = "You win! Paper beats rock!";
        }
    }

    else if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore += 1;
            currentRound.textContent = "You lose! Rock beats scissors!";
        }
        else if (computerChoice == "paper") {
            playerScore += 1;
            currentRound.textContent = "You win! Scissors beat paper!";
        }
    }

    runningScore.textContent = `Player: ${playerScore}  -  Computer: ${computerScore}`;

    if (playerScore == 5) {
        runningScore.textContent = "CONGRATS! YOU WIN!";
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5) {
        runningScore.textContent = "YOU LOSE!";
        playerScore = 0;
        computerScore = 0;
    }
}

function removeEffect(e) {
    this.classList.remove("pressed");
}

let playerScore = 0;
let computerScore = 0;

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

const buttons = document.querySelectorAll(".button");

let board = document.querySelector("#board");
let currentChoice = document.querySelector("#current-choice");
let currentRound = document.querySelector("#current-round");
let runningScore = document.querySelector("#running-score");
let finish = document.querySelector("#finish");

buttons.forEach(button => button.addEventListener("click", playRound));

buttons.forEach(button => button.addEventListener("transitionend", removeEffect));

