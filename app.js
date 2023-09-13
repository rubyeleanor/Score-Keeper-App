const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const resetAll = document.querySelector('#resetAll');

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playTo');

const p1WinsDisplay = document.querySelector('#p1WinsDisplay');
const p2WinsDisplay = document.querySelector('#p2WinsDisplay');

const bestOfSelect = document.querySelector('#bestOf');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

let p1Wins = 0;
let p2Wins = 0;

let totalRounds = parseInt(bestOf.options[bestOf.selectedIndex].value);
let isTournOver = false;
let roundsPlayed = 0

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
            roundsPlayed += 1;
            if (roundsPlayed === totalRounds) {
                isTournOver = true;
                p1Button.disabled = true;
                p2Button.disabled = true;
                resetButton.disabled = true;
                if (p1Wins > p2Wins) {
                    p1WinsDisplay.classList.add('winner');
                    p2WinsDisplay.classList.add('loser');
                } else if (p2Wins > p1Wins) {
                    p2WinsDisplay.classList.add('winner');
                    p1WinsDisplay.classList.add('loser');
                }
            }
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
            roundsPlayed += 1;
            if (roundsPlayed === totalRounds) {
                isTournOver = true;
                p1Button.disabled = true;
                p2Button.disabled = true;
                resetButton.disabled = true;
                if (p2Wins > p1Wins) {
                    p2WinsDisplay.classList.add('winner');
                    p1WinsDisplay.classList.add('loser');
                } else if (p1Wins > p2Wins) {
                    p1WinsDisplay.classList.add('winner');
                    p2WinsDisplay.classList.add('loser');
                }
            }
        }
        p2Display.textContent = p2Score;

    }
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

bestOfSelect.addEventListener('change', function () {
    resetTournament();
    totalRounds = parseInt(this.value);
})

resetButton.addEventListener('click', reset);

resetAll.addEventListener('click', resetTournament);

function resetTournament() {
    reset();
    p1Wins = 0;
    p2Wins = 0;
    p1WinsDisplay.textContent = 0;
    p2WinsDisplay.textContent = 0;
    p1WinsDisplay.classList.remove('loser', 'winner');
    p2WinsDisplay.classList.remove('loser', 'winner');
    roundsPlayed = 0;
    resetButton.disabled = false;
}

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


