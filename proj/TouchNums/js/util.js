
var nums = 16;
var rootNums = Math.sqrt(nums);
var creatArray = createArray(nums);

function createBoard() {
    var board = [];
    for (var i = 0; i < rootNums; i++) {
        board.push([])
        for (var j = 0; j < rootNums; j++) {
            board[i][j] = randomInt();
        }
    }
    return board;
}


function createArray(nums){
    var number = []
    for (var i = 0; i < nums; i++) {
        number.push(i+1) 
    }
    return number
}


function randomInt(){
    var idx = getRandomInt(0, creatArray.length)
    var num = creatArray[idx]
    creatArray.splice(idx, 1)
    return num
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}
