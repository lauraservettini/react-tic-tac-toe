export default function Log({turns}) {
    return (
        <ol id="log">
            {turns.map((turn) => <li key={ `${turn.tab.row1}${turn.tab.row1}` }>{turn.player} selected {turn.tab.row}, {turn.tab.col}</li>)}
        </ol>
    );
}