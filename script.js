let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;
    } else {
        console.log("Invalid choice, please try again.");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    // Compare the human choice with the computer choice
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log("You win this round! " + humanChoice + " beats " + computerChoice);
    } else {
        computerScore++;
        console.log("Computer wins this round! " + computerChoice + " beats " + humanChoice);
    }
}

function playGame() {
    humanScore = 0; // Reset the scores
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1) + ":");

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);

        console.log("Score after round " + (i + 1) + ": Human " + humanScore + " - Computer " + computerScore);
        console.log("------------------------");
    }

    // Declare the final winner
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game with a score of " + humanScore + " to " + computerScore);
    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer won the game with a score of " + computerScore + " to " + humanScore);
    } else {
        console.log("It's a tie! Both finished with a score of " + humanScore + " to " + computerScore);
    }
}


