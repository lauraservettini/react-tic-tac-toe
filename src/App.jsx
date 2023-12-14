import {useState} from 'react';

import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function changeActivePlayer() {
    setActivePlayer((activePlayer) => (activePlayer === 'X') ? 'O' : 'X' );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" isActive={ activePlayer === 'X'} symbol="X"></Player>
          <Player name="Player 2" isActive={ activePlayer === 'O'} symbol="O"></Player>
        </ol>

        <GameBoard activePlayerSymbol={activePlayer} changeActivePlayer={changeActivePlayer}/>
      </div>
    </main>
  )
}

export default App
