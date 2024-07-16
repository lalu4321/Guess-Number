let randomNumber;
let attempts = 0;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('resultMessage').innerText = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('resetGame').style.display = 'none';
}

document.getElementById('submitGuess').addEventListener('click', () => {
    const guessInput = document.getElementById('guessInput').value;
    const guess = Number(guessInput);
    attempts++;

    if (guess < 1 || guess > 100) {
        document.getElementById('resultMessage').innerText = 'Please enter a number between 1 and 100.';
    } else if (guess === randomNumber) {
        document.getElementById('resultMessage').innerText = `Correct! Youve guessed the number in ${attempts} attempts.`;
        document.getElementById('resetGame').style.display = 'inline';
    } else if (guess < randomNumber) {
        document.getElementById('resultMessage').innerText = 'Too low! Try again.';
    } else {
        document.getElementById('resultMessage').innerText = 'Too high! Try again.';
    }
});

document.getElementById('resetGame').addEventListener('click', startGame)
window.onload = startGame;