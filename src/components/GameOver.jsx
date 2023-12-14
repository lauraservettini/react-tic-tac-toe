export default function GameOver({winner, restartGame}) {
    return <div id="game-over">
        { winner && <h2>There's a Champion!</h2>}
        { !winner && <h2>Game Over!</h2>}
        { winner && <p>{winner} won!</p>}
        { !winner && <p>It&apos;s a draw!</p>}
        <p>
            <button onClick={restartGame}>Restart Game!</button>
        </p>
    </div>
}