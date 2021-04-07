
//craet array with nums
function createArray(size) {
    var number = []
    for (var i = 0; i < size; i++) {
        number.push(i)
    }
    return number
}

// random num 
function randomNum(nums) {
    var idx = getRandomInt(0, nums.length)
    var num = nums[idx]
    nums.splice(idx, 1)
    return num
}

//random int
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
//timer
var firstTime = new Date().getTime();

function timer() {
    var endTime = new Date().getTime();
    var sec = parseInt((endTime - firstTime) / 1000);
    var mili = (endTime - firstTime) % 1000;
    elTimer.innerText = sec + '.' + mili;
    bestTime = sec + '.' + mili;
}



