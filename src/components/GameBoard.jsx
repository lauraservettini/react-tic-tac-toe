import {useState} from 'react';

const initialGameBoard = [
    [false,false,false],
    [false,false,false],
    [false,false,false]
]

export default function GameBoard({changeActivePlayer, activePlayerSymbol}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectTab(rowIndex, colIndex){
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });

        changeActivePlayer();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => 
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => 
                        <li key={colIndex}>
                            <button onClick={() => handleSelectTab(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>)}
                    </ol>
                </li>)}
        </ol>

    );
}