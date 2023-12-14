export default function GameBoard({changeActivePlayer, gameBoard}) {
    
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => 
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => 
                        <li key={colIndex}>
                            <button onClick={() => changeActivePlayer(rowIndex, colIndex)} disabled={ playerSymbol !== false ? true : false}>{playerSymbol}</button>
                        </li>)}
                    </ol>
                </li>)}
        </ol>

    );
}