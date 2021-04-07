'use strict'

function chooseLevel(level) {
    switch (level) {
        case '4':
            board = {
                size: 4,
                mines: 2,
                maxLife: 1
            };
            break;
        case '8':
            board = {
                size: 8,
                mines: 12,
                maxLife: 2
            };
            break;
        case '12':
            board = {
                size: 12,
                mines: 30,
                maxLife: 3
            };
            break;
    }
    clearInterval(interval);
    initGame();
}


function buildBoard(size) {
    var mat = [];
    for (var i = 0; i < size; i++) {
        mat[i] = [];
        for (var j = 0; j < size; j++) {
            var cell = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false
            }
            mat[i][j] = cell
        }
    }
    return mat;
}


function renderBoard(mat, selector) {
    var strHTML = '<table border="0"><tbody>';
    for (var i = 0; i < mat.length; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < mat[0].length; j++) {
            var currCell = mat[i][j];
            var cellId = `cell-${i}-${j}`;
            if (!currCell.isShown) {
                strHTML += `<td id="${cellId}" oncontextmenu ="cellMarked(${i},${j}); return false;" 
                 onclick="cellClicked(${i},${j})">`
                if (currCell.isMarked) {
                    strHTML += FLAG
                } else {
                    strHTML += '🤷‍♂️'
                }
                strHTML += `</td>`
            } else {
                strHTML += `<td id="${cellId}">`
                if (currCell.isMine && currCell.isShown) strHTML += MINE
                else if (currCell.isShown && !currCell.isMine && currCell.minesAroundCount > 0) strHTML += currCell.minesAroundCount
                strHTML += `</td>`
            }
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>';
    var elContainer = document.querySelector(selector);
    elContainer.innerHTML = strHTML;
}
