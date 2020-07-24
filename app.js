//------------------------ HELPER FUNCTIONS ------------------
var togglePlayer = () => {
    if(currentPlayer === 'X'){
        currentPlayer = 'O';
        setCurrentPlayer(currentPlayer);
    }else{
        currentPlayer = 'X';
        setCurrentPlayer(currentPlayer);
    }
};
var setCurrentPlayer = (Player) => {
    currentPlayerDiv.innerHTML = 'Current Player \n <h1 class="h1">'+Player+'</h1>';
}

var setWinnerPlayer = (Player) => {
    winningPlayerDiv.innerHTML = 'Winner Player\n<h1 class="winner">'+Player+'</h1>';
}

var setDraw = () => {
    winningPlayerDiv.innerHTML = '<h1 class="draw">Draw</h1>';
} 

var init = () => {
    currentPlayer = 'X'; 
    winnerPlayer = undefined;
    setCurrentPlayer(currentPlayer);
    winningPlayerDiv.innerHTML = '';
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
    if((obj[1] === obj[2]) && (obj[2] === obj[3])){
        setWinnerPlayer(obj[1]);
        winnerPlayer = obj[1];
        return true;
    } else if ((obj[4] === obj[5]) && (obj[5] === obj[6])){
        setWinnerPlayer(obj[4]); 
        winnerPlayer = obj[4];
        return true;
    }else if ((obj[7] === obj[8]) && (obj[8] === obj[9])){
        setWinnerPlayer(obj[7]); 
        winnerPlayer = obj[7];
        return true;
    }
};

var checkForWinByColumn = (obj) => {
    if((obj[1] === obj[4]) && (obj[4] === obj[7])){         
        setWinnerPlayer(obj[1]);
        winnerPlayer = obj[1];
        return true;
    } else if ((obj[2] === obj[5]) && (obj[2] === obj[8])){
        setWinnerPlayer(obj[2]);
        winnerPlayer = obj[2];
        return true;
    }else if ((obj[3] === obj[6]) && (obj[3] === obj[9])){
        setWinnerPlayer(obj[3]); 
        winnerPlayer = obj[3];
        return true;
    }
};

var checkForWinDiagonally = (obj) => {
    if((obj[1] === obj[5]) && (obj[1] === obj[9])){
        setWinnerPlayer(obj[1]);
        winnerPlayer = obj[1];
        return true;
    } else if ((obj[3] === obj[5]) && (obj[3] === obj[7])){
        setWinnerPlayer(obj[3]); 
        winnerPlayer = obj[3];
        return true;
    }
};

var checkForWin = (obj) => {
    //check winning by row
    if(checkForWinByRow(obj) || checkForWinByColumn(obj) 
    || checkForWinDiagonally(obj)){
        return true;
    }
}

var checkDraw = (obj) => {
    if(checkAllBoxes(obj)){
        if(checkForWinByRow(obj) || checkForWinByColumn(obj) 
        || checkForWinDiagonally(obj)){
            return false;
        }
        return true;        
    }    
}

var checkAllBoxes = (obj) => {
    for(var key in obj){
        if(obj[key] === ''){
            return false;
        }
    }
    return true;
}

var addToBoard = (e) => {
    if(winnerPlayer === undefined || winnerPlayer === ''){
        if(e.textContent === ''){
            e.textContent = currentPlayer;
            gameBoard[e.id] = currentPlayer;
            togglePlayer();        
            setCurrentPlayer(currentPlayer);        
        } 
        checkForWin(gameBoard); 
        if(checkDraw(gameBoard)){
            setDraw();
        }       
    }    
}
//--------------- END OF HELPER FUNCTIONS -------------------

var firstRow = document.getElementById('first-row');
var secondRow = document.getElementById('second-row');
var thirdRow = document.getElementById('third-row');
var currentPlayerDiv = document.getElementById('currentPlayer');
var winningPlayerDiv = document.getElementById('WinningPlayer');
var resetBtn = document.getElementById('reset');
var gameBoard = {
    1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:''
};
var currentPlayer = 'X';
var winnerPlayer;
init();

resetBtn.onclick = () => {
  init();
};

firstRow.childNodes.forEach(e => e.addEventListener('click',() => {    
  addToBoard(e);
}));
    
secondRow.childNodes.forEach(e => e.addEventListener('click',() => {    
  addToBoard(e);
}));
    
thirdRow.childNodes.forEach(e => e.addEventListener('click',() => {    
  addToBoard(e);
}));