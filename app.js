const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const resetAll = document.querySelector('#resetAll');

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playTo');

const p1WinsDisplay = document.querySelector('#p1WinsDisplay');
const p2WinsDisplay = document.querySelector('#p2WinsDisplay');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

let p1Wins = 0;
let p2Wins = 0;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
            p1Button.disabled = true;
            p2Button.disabled = true;
            p1Wins += 1;
            p1WinsDisplay.textContent = p1Wins;
        }
        p1Display.textContent = p1Score;

    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
            p1Button.disabled = true;
            p2Button.disabled = true;
            p2Wins += 1;
            p2WinsDisplay.textContent = p2Wins
        }
        p2Display.textContent = p2Score;

    }
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset);

resetAll.addEventListener('click', function () {
    reset();
    p1Wins = 0;
    p2Wins = 0;
    p1WinsDisplay.textContent = 0;
    p2WinsDisplay.textContent = 0;

})

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('loser', 'winner');
    p2Display.classList.remove('loser', 'winner');
    p1Button.disabled = false;
    p2Button.disabled = false;
}


