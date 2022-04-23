// Global variables

let score = 0;
const ask = require("readline-sync");

// Database

qnaDb = [
    { state: "Andhra Pradesh", capital: "Amaravati" },
    { state: "Arunachal Pradesh", capital: "Itanagar" },
    { state: "Assam", capital: "Dispur" },
    { state: "Bihar", capital: "Patna" },
    { state: "Chhattisgarh", capital: "Raipur" },
    { state: "Goa", capital: "Panaji" },
    { state: "Gujarat", capital: "Gandhinagar" },
    { state: "Haryana", capital: "Chandigarh" },
    { state: "Himachal Pradesh", capital: "Shimla" },
    { state: "Jharkhand", capital: "Ranchi" },
    { state: "Karnataka", capital: "Bengaluru" },
    { state: "Kerala", capital: "Thiruvananthapuram" },
    { state: "Madhya Pradesh", capital: "Bhopal" },
    { state: "Maharashtra", capital: "Mumbai" },
    { state: "Manipur", capital: "Imphal" },
    { state: "Meghalaya", capital: "Shillong" },
    { state: "Mizoram", capital: "Aizawl" },
    { state: "Nagaland", capital: "Kohima" },
    { state: "Odisha", capital: "Bhubaneswar" },
    { state: "Punjab", capital: "Chandigarh" },
    { state: "Rajasthan", capital: "Jaipur" },
    { state: "Sikkim", capital: "Gangtok" },
    { state: "Tamil Nadu", capital: "Chennai" },
    { state: "Telangana", capital: "Hyderabad" },
    { state: "Tripura", capital: "Agartala" },
    { state: "Uttar Pradesh", capital: "Lucknow" },
    { state: "Uttarakhand", capital: "Dehradun" },
    { state: "West Bengal", capital: "Kolkata" },
];

// Function

function play(seq, que, ans) {
    const response = ask.question(
        `\nQuestion:${seq} - Capital city of ${que} ?\n`
    );
    if (response.toLowerCase() === ans.toLowerCase()) {
        score += 4;
        console.log(`\nYou're correct!\nScore: ${score}\n`);
    } else {
        score -= 2;
        console.log(`\nThat's wrong!\nScore: ${score}\n`);
    }
}

// Flow goes here

const uname = ask.question("Your good name please ?\n");
console.log(`\nHi ${uname}, Welcome to the quiz on captial cities!\n\n`);

const age = ask.question("Your age please ?\n");

if (age >= 18) {
    const qna_num = ask.question(
        `\nHow many questions you wanna answer ? (${qnaDb.length} questions are available)\n`
    );

    console.log("\nGame starts...\n");

    for (let i = 0; i < qna_num; i++) {
        play(i + 1, qnaDb[i].state, qnaDb[i].capital);
    }
} else {
    console.log(`\nSorry ${uname}, come back when you grewup 18!\n`);
}
