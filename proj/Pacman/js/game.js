'use strict'
const WALL = '🧻'
const FOOD = '.'
const EMPTY = ' ';
const POWER_FOOD = '🍔';
const CHERRY = '🍒';



var gBoard;
var gGame = {
    score: 0,
    isOn: false
}
//global var
var gWin = false;
var gCherryInterval;
var gIsPower = false;


function init() {
    gBoard = buildBoard()
    createPacman(gBoard);
    createGhosts(gBoard);
    printMat(gBoard, '.board-container');
    allFoodCollected()
    gGame.isOn = true;
    gCherryInterval = setInterval(randomCherry, 15000)
}

function buildBoard() {
    var SIZE = 10;
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = FOOD;
            if (i === 1 && j === 1 ||
                i === 1 && j === 8 ||
                i === 8 && j === 1 ||
                i === 8 && j === 8) board[i][j] = POWER_FOOD;
            if (i === 0 || i === SIZE - 1 ||
                j === 0 || j === SIZE - 1 ||
                (j === 3 && i > 4 && i < SIZE - 2)) {
                board[i][j] = WALL;
            }
        }
    }
    return board;
}



function updateScore(diff) {
    // update model
    gGame.score += diff;
    // and dom
    var elScore = document.querySelector('h2 span');
    elScore.innerText = gGame.score;
}

function gameOver() {
    gGame.isOn = false;
    clearInterval(gIntervalGhosts);
    gIntervalGhosts = null;
    clearInterval(gCherryInterval)
    // TODO
    playAgain();
}

function playAgain() {
    var elModal = document.querySelector('.playAgain');
    var elMsg = document.querySelector('.playAgain h2');
    var msg = (gWin) ? 'You win!' : 'Game over!';
    elMsg.innerText = msg;
    elModal.style.display = 'block';
}

function reset() {
    var elModal = document.querySelector('.playAgain');
    elModal.style.display = 'none';
    updateScore(-gGame.score);
    init();
}

function allFoodCollected() {
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[0].length; j++) {
            if (gBoard[i][j] === FOOD) return;
        }
    }
    gWin = true;
    gameOver();
}

function randomCherry() {
    var emptyCells = findEmptyCells();
    if (!emptyCells.length) return;
    var emptyCell = emptyCells[getRandomIntInclusive(0, emptyCells.length - 1)];
    //model
    gBoard[emptyCell.i][emptyCell.j] = CHERRY
    //dom
    renderCell(emptyCell, CHERRY)

}


function findEmptyCells() {
    var emptyCells = []
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[0].length; j++) {
            var currCell = gBoard[i][j]
            if (currCell === EMPTY) emptyCells.push({ i, j });
        }
    }
    return emptyCells;
}

