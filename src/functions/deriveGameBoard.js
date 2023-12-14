const INITIAL_GAME_BOARD = [
    [false,false,false],
    [false,false,false],
    [false,false,false]
  ];

export default function deriveGameBoard(gameTurns){
    let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];
  
    for(const turn of gameTurns) {
        const { tab , player} = turn;
        const {row, col} = tab;
  
        gameBoard[row][col] = player;
    }  
  
    return gameBoard;
  }