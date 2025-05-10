function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) return "rock";
    if (choice === 1) return "paper";
    return "scissors";
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let result = "";

    if (humanChoice === computerChoice) {
        result = "Tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        result = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    updateResults(result);
    checkWinner();
}

function updateResults(result) {
    const roundResult = document.getElementById("roundResult");
    const scoreDisplay = document.getElementById("score");

    roundResult.textContent = result;
    scoreDisplay.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
}

function checkWinner() {
    const gameWinner = document.getElementById("gameWinner");

    if (humanScore === 5) {
        gameWinner.textContent = "You won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        gameWinner.textContent = "Computer won the game!";
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock", getComputerChoice()));
document.getElementById("paper").addEventListener("click", () => playRound("paper", getComputerChoice()));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors", getComputerChoice()));
