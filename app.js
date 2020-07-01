//------------------------ HELPER FUNCTIONS ------------------
var togglePlayer = () => {
    if(currentPlayer === 'X'){
        currentPlayer = 'O';
    }else{
        currentPlayer = 'X';
    }
};

var init = () => {
    currentPlayer = 'X'; 
    winningPlayerDiv.innerText = '';
    //console.log('init called'); 
    firstRow.childNodes.forEach(e => {
        e.textContent = '';
    });
    secondRow.childNodes.forEach(e => {
        e.textContent = '';
    });
    thirdRow.childNodes.forEach(e => {
        e.textContent = '';
    });
    gameBoard = {
        1:"", 2:"", 3:"", 4:"", 5:"", 6:"", 7:"", 8:"", 9:""
    };
    //console.log(gameBoard);
};

var checkForWinByRow = (obj) => {
    if(((obj[1] === obj[2]) && (obj[2] === obj[3]))){
        winningPlayerDiv.innerText = 'Winning Player is : ' + obj[1];
        win = true;
        return;
    } else if (((obj[4] === obj[5]) && (obj[5] === obj[6]))){
        winningPlayerDiv.innerText = 'Winning Player is : ' + obj[4];
        win = true;
        return;
    }else if (((obj[7] === obj[8]) && (obj[8] === obj[9]))){
        winningPlayerDiv.innerText = 'Winning Player is : ' + obj[7];
        win = true;
        return;
    }
};
var checkForWinByColumn = (obj) => {
    if(((obj[1] === obj[4]) && (obj[4] === obj[7]))){
        winningPlayerDiv.innerText = 'Winning Player is : ' + obj[1];
        win = true;
        return;
    } else if (((obj[2] === obj[5]) && (obj[2] === obj[8]))){
        winningPlayerDiv.innerText = 'Winning Player is : ' + obj[2];
        win = true;
        return;
    }else if (((obj[3] === obj[6]) && (obj[3] === obj[9]))){
        winningPlayerDiv.innerText = 'Winning Player is : ' + obj[3];
        win = true;
        return;
    }
};
var checkForWinDiagonally = (obj) => {
    if(((obj[1] === obj[5]) && (obj[1] === obj[9]))){
        winningPlayerDiv.innerText = 'Winning Player is : ' + obj[1];
        win = true;
        return;
    } else if ((obj[3] === obj[5]) && (obj[3] === obj[7])){
        winningPlayerDiv.innerText = 'Winning Player is : ' + obj[3];
        win = true;
        return;
    }
};

var checkDraw = (obj) => {
    if(obj[1] && obj[2] && obj[3] && obj[4] 
        && obj[5] && obj[6] && obj[7] & obj[8] && obj[9])
    {
        winningPlayerDiv.innerText = 'Draw';
        return;    
    }
}

var checkForWin = (obj) => {
    //check winning by row
    checkForWinByRow(obj);
    //check winning by column
    checkForWinByColumn(obj);
    // check winning Diagonally
    checkForWinDiagonally(obj);
    // check for draw
    checkDraw(obj);
}
//--------------- END OF HELPER FUNCTIONS -------------------

var firstRow = document.getElementById('first-row');
var secondRow = document.getElementById('second-row');
var thirdRow = document.getElementById('third-row');
var currentPlayerDiv = document.getElementById('currentPlayer');
var winningPlayerDiv = document.getElementById('WinningPlayer');
var resetBtn = document.getElementById('reset');
var gameBoard = {
    1:"", 2:"", 3:"", 4:"", 5:"", 6:"", 7:"", 8:"", 9:""
};
var currentPlayer = 'X';
var win = false;
init();
resetBtn.onclick = () => {
    init();
};

currentPlayerDiv.innerText = 'Current Player: '+currentPlayer;

firstRow.childNodes.forEach(e => e.addEventListener('click',() => {    
    if(e.textContent === '' && win === true){
        e.textContent = currentPlayer;
        gameBoard[e.id] = currentPlayer;
        togglePlayer();        
        currentPlayerDiv.innerText = 'Current Player: '+currentPlayer;
    }
    checkForWin(gameBoard);
}));

secondRow.childNodes.forEach(e => e.addEventListener('click',() => {    
    if(e.textContent === '' && win === true){
        e.textContent = currentPlayer;
        gameBoard[e.id] = currentPlayer;
        togglePlayer();
        currentPlayerDiv.innerText = 'Current Player: '+currentPlayer;
    }
    checkForWin(gameBoard);
}));

thirdRow.childNodes.forEach(e => e.addEventListener('click',() => {    
    if(e.textContent === '' && win === true){
        e.textContent = currentPlayer;
        gameBoard[e.id] = currentPlayer;
        togglePlayer();
        currentPlayerDiv.innerText = 'Current Player: '+currentPlayer;
    }
    checkForWin(gameBoard);
}));