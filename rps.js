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

function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper or scissors?").toLowerCase();

    while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        console.log("Invalid input, please choose rock, paper or scissors.");
        playerChoice = prompt("Rock, paper or scissors?").toLowerCase();
    }
    return playerChoice;
}

function playRound(playerChoice, computerChoice) {

    console.log("Computer choice: " + computerChoice);
    console.log("Player choice: " + playerChoice);

    if (playerChoice == computerChoice) {
        return "draw";
    }

    else if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            return "computer";
        }
        else if (computerChoice == "scissors") {
            return "player";
        }
    }

    else if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            return "computer";
        }
        else if (computerChoice == "rock") {
            return "player";
        }
    }

    else if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            return "computer";
        }
        else if (computerChoice == "paper") {
            return "player";
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();

        console.log("\n*****Round*****" + (i+1));

        let currentRound = playRound(playerChoice, computerChoice);

        if (currentRound == "player") {
            playerScore += 1;
            console.log("You win!");
        }
        else if (currentRound == "computer") {
            computerScore += 1;
            console.log("Computer wins!");
        }
    }
    console.log("----------------------");
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
    console.log("----------------------");
}

game();