'use strict'
var board = createBoard();
var counter = 1
var firstTime;
var interval;
var elTimer;


function init() {
    elTimer = document.querySelector('.timerTxt');
    renderBoard(board);
}

function renderBoard(board) {   
    var strHtml = '';
    for (var i = 0; i < board.length; i++) {
        strHtml += '<tr>'
        for (var j = 0; j < board[i].length; j++) {
            strHtml += `<td onclick="cellClicked(this)"
            data-i = "${i}" data-j = "${j}">${board[i][j]}</td>`
        }
        strHtml += '</tr>'
    }
    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHtml
}
var elNext = document.querySelector('.next-number span')
elNext.innerText = counter;

function cellClicked(clickedNum) {
    var txt = clickedNum.innerText
    if (+txt === counter) {
        clickedNum.style.backgroundColor = 'steelblue'
        counter++
        if(counter <= nums) elNext.innerText = counter;
        else elNext.innerText = 'You win!'
       
        if (counter === 2) {
            firstTime = new Date().getTime();
            interval = setInterval(timer, 100)
        }
        if (counter > nums) {
            console.log('Game over!');
            clearInterval(interval);
        }
    }
}

function newGame() {
    counter = 1;
    clearInterval(interval);
    elTimer.innerText = '00:00';
    elNext.innerText = counter
    init();
}

function timer() {
    var endTime = new Date().getTime()
    var sec = parseInt((endTime - firstTime)/1000)
    var mili = (endTime - firstTime) % 1000
    elTimer.innerText =  sec + ':' + mili
}


function tableSize(size){
    if(size.className === '1 levelBtn') nums = 16;
    else if(size.className === '2 levelBtn') nums = 25;
    else if(size.className === '3 levelBtn') nums = 36;
    rootNums = Math.sqrt(nums);
    creatArray = createArray(nums);
    board = createBoard();
    newGame();
}




