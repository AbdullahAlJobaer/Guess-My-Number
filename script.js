"use strict";

// Final Refactored Code version 1.0

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;     // Application state
let highScore = 0;  // Application state

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}

function displayScore(setScore) {
    document.querySelector(".score").textContent = setScore;
}

document.querySelector(".check").addEventListener
    ("click", function () {
        const guess = Number(document.querySelector(".guess").value)

        console.log(guess, typeof guess);

        // When there is no input
        if (!guess) {
            displayMessage("⛔ No Number");

            // When player wins
        } else if (guess === secretNumber) {
            document.querySelector(".number").textContent = secretNumber;
            displayMessage("🎉 Correctly Guessed!");
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = "30rem";
            document.querySelector(".number").style.transition = "width 500ms";

            if (score > highScore) {
                highScore = score;
                document.querySelector(".highscore").textContent = highScore;
            }


            // When guess is wrong
        } else if (guess !== secretNumber) {
            if (score > 1) {
                displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
                score--;
                displayScore(score);
            } else {
                displayMessage("❌ You Lost the Game!");
                displayScore(0);
            }
        }
    });

document.querySelector(".again").addEventListener
    ("click", function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        displayScore(score);
        document.querySelector(".number").textContent = "?";
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";
        document.querySelector("body").style.transition = "background-color 400ms, width 400ms";
        displayMessage("Start guessing...");
        document.querySelector(".guess").value = null;
    });