(function  () {
  // CACHE DOM
  const tiles = Array.from(document.querySelectorAll('.tile'));
  
  // SETTING THE BOARD
    let board = ['','','',
                  '','','',
                  '','','']
console.log(board)  

 const currentPlayer = 'X'
 console.log(currentPlayer)
 let isGameActive = true;

  // ADDING EVENT TO THE TILES
  tiles.forEach( (tile, index) => {
    tile.addEventListener('click', () => userAction(tile, index));
});

  // SETTING THE USER ACTION WHEN TILES ARE CLICKED
  const userAction = (tile, index) => {
    if(isValidAction(tile) && isGameActive) {
      tile.innerText = currentPlayer;
      tile.classList.add(`player${currentPlayer}`);
      updateBoard(index);
      swipeTurn(currentPlayer);
    }
  }

  const isValidAction = (tile) => {
    if (tile.innerText === 'X' || tile.innerText === 'O'){
        return false;
    }

    return true;
};

const updateBoard =  (index) => {
  board[index] = currentPlayer;
  console.log(board)
}

const changePlayer = () => {
  
}
      

  // const gameFlow = {
  //   createPlayer: (name, icon) =>{
  //     return { name, icon };
  // }};

  // gameFlow.createPlayer('Adrian', 'X')

})();


