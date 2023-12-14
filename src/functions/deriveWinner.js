import {WINNING_COMBINATIONS} from '../winning_combinations.js';

export default function deriveWinner(gameBoard, players){
    let winner;
  
    for(const combination of WINNING_COMBINATIONS){
      const firstTabSymbol = gameBoard[combination[0].row][combination[0].column];
      const secondTabSymbol = gameBoard[combination[1].row][combination[1].column];
      const thirdTabSymbol = gameBoard[combination[2].row][combination[2].column];
  
      if(firstTabSymbol && 
        firstTabSymbol === secondTabSymbol && 
        secondTabSymbol === thirdTabSymbol){
          winner = players[firstTabSymbol];
      }
    }
  
    return winner;
  }