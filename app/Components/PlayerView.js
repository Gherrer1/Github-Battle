const React = require('react');

function PlayerView(props) {
    return (
        <div className="player-item">
            <h1>Player {props.playerNumber}</h1>
            {
            props.username === null ?
                <input type="text" placeholder="github username"/>
                :
                <h2>{props.username}</h2>
            }
            <br />
            <button>Submit</button>
        </div>
    );
}

module.exports = PlayerView;
