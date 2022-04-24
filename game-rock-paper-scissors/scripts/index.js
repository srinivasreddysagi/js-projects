// Elements

const user_Score = document.getElementById("user-score");
const computer_Score = document.getElementById("computer-score");
const user_choice = document.getElementById("user-selection");
const computer_choice = document.getElementById("computer-selection");
const comment = document.getElementById("comment");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// Global variables

const weapons = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let computerScore = 0;
let attempts = 0;

// Functions

function computerTurn() {
    let randNum = Math.trunc(Math.random() * 3);
    return weapons[randNum];
}

function play(userChoice) {
    let computerChoice = computerTurn();
    attempts += 1;
    if (
        (computerChoice === "Rock" && userChoice === "Scissors") ||
        (computerChoice === "Scissors" && userChoice === "Paper") ||
        (computerChoice === "Paper" && userChoice === "Rock")
    ) {
        user(userChoice, computerChoice, "win");
    } else if (
        (computerChoice === "Scissors" && userChoice === "Rock") ||
        (computerChoice === "Paper" && userChoice === "Scissors") ||
        (computerChoice === "Rock" && userChoice === "Paper")
    ) {
        user(userChoice, computerChoice, "lost");
    } else {
        user(userChoice, computerChoice, "tie");
    }
}

function user(userChoice, computerChoice, status) {
    if (status === "win") {
        userScore += 1;
        user_Score.innerHTML = userScore;
        computer_Score.innerHTML = computerScore;
        user_choice.innerHTML = userChoice;
        computer_choice.innerHTML = computerChoice;
        comment.innerHTML = "You won";
    } else if (status === "lost") {
        computerScore += 1;
        user_Score.innerHTML = userScore;
        computer_Score.innerHTML = computerScore;
        user_choice.innerHTML = userChoice;
        computer_choice.innerHTML = computerChoice;
        comment.innerHTML = "You lost";
    } else {
        userScore += 1;
        computerScore += 1;
        comment.innerHTML = "It's a tie";
    }

    if (attempts === 10 || userScore >= 5) {
        document.location.reload();
        if (userScore > computerScore) {
            alert("You won");
        } else if (computerScore > userScore) {
            alert("You lost");
        } else {
            alert("It's a tie!");
        }
    }
}

// Events

rock.addEventListener("click", function () {
    play("Rock");
});

paper.addEventListener("click", function () {
    play("Paper");
});

scissors.addEventListener("click", function () {
    play("Scissors");
});
