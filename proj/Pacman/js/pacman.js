'use strict'
const PACMAN = '🧟‍♂️';

var gPacman;
function createPacman(board) {
    // TODO
    gPacman = {
        location: {
            i: 6,
            j: 6
        },
        isSuper: false
    }
    board[gPacman.location.i][gPacman.location.j] = PACMAN;
}

function movePacman(ev) {
    if (!gGame.isOn) return
    // use getNextLocation(), nextCell
    var nextLocation = getNextLocation(ev);

    var nextCell = gBoard[nextLocation.i][nextLocation.j];

    // return if cannot move
    if (nextCell === WALL) return;
    if (nextCell === FOOD) {
        updateScore(1)
    }
    if (nextCell === CHERRY) {
        updateScore(10)
    }

    // hitting a ghost?  call gameOver
    if (nextCell === POWER_FOOD) {
        updateScore(1);
        gIsPower = true;
        gPacman.isSuper = true;
        setTimeout(endPower, 5000);
    }
    if (nextCell === GHOST) {
        if (gPacman.isSuper) {
            updateScore(1);
            nextCell = EMPTY
            gPacman.isSuper = false;
        } else {
            gameOver();
            renderCell(gPacman.location, EMPTY)
            return
        }
    }


    // update the model
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY;
    allFoodCollected();
    // update the DOM
    renderCell(gPacman.location, EMPTY)

    // Move the pacman
    // update the model

    gPacman.location = nextLocation;
    gBoard[gPacman.location.i][gPacman.location.j] = PACMAN;

    // update the DOM
    renderCell(gPacman.location, PACMAN);
}



function getNextLocation(ev) {
    // figure out nextLocation
    // console.log('ev.code', ev.code)
    var nextLocation = {
        i: gPacman.location.i,
        j: gPacman.location.j
    }

    switch (ev.code) {
        case 'ArrowUp':
            nextLocation.i--
            break;
        case 'ArrowDown':
            nextLocation.i++
            break;
        case 'ArrowLeft':
            nextLocation.j--
            break;
        case 'ArrowRight':
            nextLocation.j++
            break;
        default: return null
    }
    return nextLocation;
}

function endPower() {
    gIsPower = false;
    gPacman.isSuper = false;
}
