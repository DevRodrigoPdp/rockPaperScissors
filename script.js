let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie! Both chose " + humanChoice;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    } else {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
}

function updateScore() {
    document.getElementById("score").textContent = "Human: " + humanScore + " - Computer: " + computerScore;
}

function playGame(humanChoice) {
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);

    document.getElementById("result").textContent = result;
    updateScore();
}
