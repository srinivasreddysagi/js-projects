// Global variables

const ask = require("readline-sync");
const weapons = ["rock", "paper", "scissors"];
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
        (computerChoice === "rock" && userChoice === "scissors") ||
        (computerChoice === "scissors" && userChoice === "paper") ||
        (computerChoice === "paper" && userChoice === "rock")
    ) {
        user(userChoice, computerChoice, "win");
    } else if (
        (computerChoice === "scissors" && userChoice === "rock") ||
        (computerChoice === "paper" && userChoice === "scissors") ||
        (computerChoice === "rock" && userChoice === "paper")
    ) {
        user(userChoice, computerChoice, "lost");
    } else {
        user(userChoice, computerChoice, "tie");
    }
}

function user(userChoice, computerChoice, status) {
    if (status === "win") {
        userScore += 1;
    } else if (status === "lost") {
        computerScore += 1;
    } else {
        userScore += 1;
        computerScore += 1;
    }
    console.log(
        `\nYou choose ${userChoice}\nComputer choose ${computerChoice}\nYour score: ${userScore}\nComputer score: ${computerScore}\n`
    );
}

// Flow goes here

console.log("Game starts...\n");

for (let i = 0; i < 10; i++) {
    let userChoice = ask.question(
        "\nSelect your weapon from 'rock - r', 'paper - p', 'scissor - s'\n"
    );
    play(userChoice);
    if (attempts === 10 || userScore === 5) {
        if (userScore > computerScore) {
            console.log("\nYou won\n");
        } else if (computerScore > userScore) {
            console.log("\nYou lost\n");
        } else {
            console.log("\nIt's a tie!\n");
        }
        break;
    }
}
