(function  () {
  // CACHE DOM
  const tiles = Array.from(document.querySelectorAll('.tile'));
  console.log(tiles)
  
  // SETTING THE BOARD
  const gameBoard = {
    gameBoard: ['','','',
                '','','',
                '','','']
  };

  // ADDING EVENT TO THE TILES
  tiles.forEach( (tile, index) => {
    tile.addEventListener('click', () => userAction(tile, index));
});

  
  
  const players = {
    currentPlayer: 'X'
  };
  



  // const gameFlow = {
  //   createPlayer: (name, icon) =>{
  //     return { name, icon };
  // }};

  // gameFlow.createPlayer('Adrian', 'X')

})();


