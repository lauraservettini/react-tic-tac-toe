import {useState} from 'react';

export default function Player({name, symbol}) {
    const [editPlayer, setEditPlayer] = useState(name);
    const [isEditPlayer, setIsEditPlayer] = useState(false);

    function editPlayerOnClick(){
        setIsEditPlayer((editing) => !editing);
    }

    function handleChange(event) {
        setEditPlayer(event.target.value);
    }
    let btnCaption = 'Edit';
    let editablePlayerName = <span className="player-name">{editPlayer}</span>;

    if( isEditPlayer) {
        editablePlayerName = <input type="text" value={editPlayer} required onChange={handleChange} />;
    }
    return (
        <li>
            <span className="player-info">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => editPlayerOnClick()}>
              { isEditPlayer ? 'Save' : 'Edit'}
            </button>
        </li>
    );
}