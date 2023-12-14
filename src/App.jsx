import {useState} from 'react';

// import Component
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import GameOver from './components/GameOver.jsx';

//import derive functions
import deriveWinner from './functions/deriveWinner.js';
import deriveGameBoard from './functions/deriveGameBoard.js';
import deriveActivePlayer from './functions/deriveActivePlayer.js';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);
  
  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);

  function handleName(symbol, name){
    setPlayers(prevPlayers => {
      return{
        ...prevPlayers,
        [symbol] : name
      }
    });
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function changeActivePlayer(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => {
            const currentPlayer = deriveActivePlayer(prevGameTurns);
            
            const updatedTurns = [{tab: { row: rowIndex, col: colIndex}, player: currentPlayer},...gameTurns];
            return updatedTurns;
          });
  }

  function restartGame(){
    setGameTurns([]);
  }
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={PLAYERS.X} handleName={handleName} isActive={ activePlayer === 'X'} symbol="X"></Player>
          <Player name={PLAYERS.O} handleName={handleName} isActive={ activePlayer === 'O'} symbol="O"></Player>
        </ol>

        { (winner || hasDraw) && <GameOver winner={winner} restartGame={restartGame}/>}
        <GameBoard gameBoard={gameBoard} changeActivePlayer={changeActivePlayer}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
