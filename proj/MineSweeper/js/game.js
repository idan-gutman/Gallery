'use strict'
const NORMAL = '😁';
const LOSE = '🤯';
const WIN = '🥳';
const MINE = '💣';
const FLAG = '🚩';

var board = {
    size: 4,
    mines: 2,
    maxLife: 1
};

var gBoard;
var elTimer = document.querySelector('h2 span');
var elRestartBtn = document.querySelector('.restart-btn');
var elGameOverMsg = document.querySelector('.game-over-msg');
var elLives = document.querySelector('.lives h2 span');
var elBestTime = document.querySelector('.best-time span');
var elSafeBtnSpan = document.querySelector('.safe-btn span')
var interval;
//best time
var startTime;
var endTime;
var gameTime;
var bestTime;


var gGame;


function initGame() {
    gBoard = buildBoard(board.size);
    renderBoard(gBoard, '.board-container');
    gGame = {
        isOn: true,
        shownCount: 0,
        markedCount: 0,
        isFirst: true,
        life: board.maxLife,
        count: 3
    }
    clearInterval(interval);
    elTimer.innerText = '0.000';
    elRestartBtn.innerText = NORMAL;
    elGameOverMsg.style.display = 'none'
    elLives.innerText = gGame.life;
    elSafeBtnSpan.innerText = gGame.count;
    isBestTimeRefresh();
    
}

function win() {
    gGame.isOn = false;
    clearInterval(interval);
    elRestartBtn.innerText = WIN;
    gameTime = (Date.now() - startTime) / 1000;
    isBestTime(gameTime);
}

function checkGameOver() {
    if (gGame.markedCount === board.mines &&
        board.size * board.size === gGame.shownCount + gGame.markedCount) {
        win();
    } else if (gGame.life === 0) gameOver();
}

function gameOver() {
    gGame.isOn = false;
    clearInterval(interval);
    elRestartBtn.innerText = LOSE;
    elGameOverMsg.style.display = 'block';
}


function restartBtn() {
    board = {
        size: 4,
        mines: 2,
        maxLife: 1
    };
    initGame();
}

function isBestTimeRefresh() {
    if (localStorage.getItem('bestTime') !== null) {
        elBestTime = document.querySelector('.best-time span');
        elBestTime.innerText = localStorage.getItem('bestTime');
    }
}

function isBestTime(gameTime) {
    if (!localStorage.getItem('bestTime')) {
        localStorage.setItem('bestTime', gameTime);
        elBestTime.innerText = bestTime;
    } else if (gameTime < localStorage.getItem('bestTime')) {
        localStorage.setItem('bestTime', gameTime);
        elBestTime.innerText = bestTime;
    }
}




