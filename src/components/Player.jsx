import {useState} from 'react';

export default function Player({name, symbol, isActive, handleName}) {
    const [editPlayer, setEditPlayer] = useState(name);
    const [isEditPlayer, setIsEditPlayer] = useState(false);
  
    function editPlayerOnClick(){
        setIsEditPlayer((editing) => !editing);
        if(isEditPlayer) {
            handleName(symbol, editPlayer);
        }
    }

    function handleChange(event) {
        setEditPlayer(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{editPlayer}</span>;

    if( isEditPlayer) {
        editablePlayerName = <input type="text" value={editPlayer} required onChange={handleChange} />;
    }
    return (
        <li className={ isActive ? 'active' : ''}>
            <span className="player-info">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => editPlayerOnClick()}>
              { isEditPlayer ? 'Save' : 'Edit'}
            </button>
        </li>
    );
};