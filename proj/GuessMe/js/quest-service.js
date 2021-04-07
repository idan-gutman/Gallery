var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;

function createQuestsTree() {
    gQuestsTree = loadFromStorage('questsTree');
    if(!gQuestsTree){
        gQuestsTree = createQuest('Male?');
        gQuestsTree.yes = createQuest('Gandhi');
        gQuestsTree.no = createQuest('Rita');
        gCurrQuest = gQuestsTree;
        gPrevQuest = null;
    }else{
        gCurrQuest = gQuestsTree;
        gPrevQuest = null;
    }
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    // TODO: update the gPrevQuest, gCurrQuest global vars
    gPrevQuest = gCurrQuest;
    gCurrQuest = gCurrQuest[res];
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    // TODO: Create and Connect the 2 Quests to the quetsions tree
    var newQuest = createQuest(newQuestTxt);
    newQuest.no = gCurrQuest;
    newQuest.yes = createQuest(newGuessTxt);
    gPrevQuest[lastRes] = newQuest;
    _saveTreeToStorage();
}

function getCurrQuest(){
    return gCurrQuest
}


function restartGame(){
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;

}

function _saveTreeToStorage(){
    return saveToStorage('questsTree', gQuestsTree)
}
