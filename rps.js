function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "scissors";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "rock";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("rock, paper, scissors?");
    return humanChoice;
}

// function playRound(humanChoice, computerChoice) {
//     if (humanChoice == "rock" && computerChoice == "scissors") {
//         console.log("Computer loses! Rock beats scissors")
//         humanScore += 1;
//     } else if (computerChoice == "rock" && humanChoice == "scissors") {
//         console.log("You lose! Rock beats scissors")
//         computerScore += 1;
//     } else if (humanChoice == "paper" && computerChoice == "rock") {
//         console.log("Computer loses! Paper beats rock");
//         humanScore += 1;
//     } else if (humanChoice == "rock" && computerChoice == "paper") {
//         console.log("You lose! Paper beats rock");
//         computerScore += 1;
//     } else if (humanChoice == "scissors" && computerChoice == "paper") {
//         console.log("Compuer loses! Scissors beats paper");
//         humanScore += 1;
//     } else if (humanChoice == "paper" && computerChoice == "scissors") {
//         console.log("You lose! Scissors beats paper");
//         computerScore += 1;
//     }
//     else {
//         console.log("Tie");
//     }
// }

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("Computer loses! Rock beats scissors")
            humanScore += 1;
        } else if (computerChoice == "rock" && humanChoice == "scissors") {
            console.log("You lose! Rock beats scissors")
            computerScore += 1;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("Computer loses! Paper beats rock");
            humanScore += 1;
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats rock");
            computerScore += 1;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("Compuer loses! Scissors beats paper");
            humanScore += 1;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Scissors beats paper");
            computerScore += 1;
        }
        else {
            console.log("Tie");
        }
    }
    

    for (i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice().toLowerCase();
        let computerChoice = getComputerChoice().toLowerCase();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log("Human wins");
    } else if (humanScore == computerScore) {
        console.log("Tie game");
    }
    else {
        console.log("Computer wins");
    }
}

// let humanScore = 0;
// let computerScore = 0;

// let humanChoice = getHumanChoice().toLowerCase();
// let computerChoice = getComputerChoice().toLowerCase();
// console.log(humanChoice, computerChoice);
playGame();

// var computerChoice = getComputerChoice();
// console.log(computerChoice);

// var humanChoice = getHumanChoice();
// console.log(humanChoice);