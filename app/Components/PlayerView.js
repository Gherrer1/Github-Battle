const React = require('react');

function PlayerView(props) {
    return (
        <div className="player-item">
            <h1>{props.playerID}</h1>
            {
            props.playerData === null ?
                <div>
                    <input
                        type="text"
                        placeholder="github username"
                        value={props.typedText}
                        onChange={(event) =>
                            props.handleType(event.target.value)
                        }
                    />
                    <br />
                    <button onClick={
                        () => props.onSubmit('username', props.playerID)
                    }>
                        Submit
                    </button>
                </div>
                :
                <div>
                    <img src={props.playerData.avatar_url} className="usr-img"/>
                    <h2>{props.playerData.login}</h2>
                </div>
            }
        </div>
    );
}

module.exports = PlayerView;
