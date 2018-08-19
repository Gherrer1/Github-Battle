const React = require('react');
const PropTypes = require('prop-types');

function PlayerView(props) {
  return (
      <div className="player-item">
        <div>
            <img src={props.playerData.avatar_url} className="usr-img"/>
            <h2>{props.playerData.login}</h2>
        </div>
      </div>
  );
}
PlayerView.propTypes = {
  playerData: PropTypes.object,
};

function PlayerInput({onInputChange, onSubmit, playerID, username}) {
  return (
      <form
          className="column"
          onSubmit={(event) => onSubmit(event, username, playerID)}
      >
          <label className="label" htmlFor="username">{playerID}</label>
          <input
              type="text"
              placeholder="github username"
              value={username}
              onChange={(event) =>
                  onInputChange(event.target.value)
              }
              autoComplete="off"
          />
          <br />
          <button
              type="submit"
              className="button"
              disabled={username.length === 0}
          >
              Submit
          </button>
      </form>
  );
}
PlayerInput.propTypes = {
  playerID: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

class PlayerViewContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };

    this.storeTyped = this.storeTyped.bind(this);
  }

  storeTyped(newTyped) {
    this.setState({
      username: newTyped,
    });
  }

  render() {
    return this.props.playerData === null ?
    (<PlayerInput
      playerID={this.props.playerID}
      username={this.state.username}
      onSubmit={this.props.onSubmit}
      onInputChange={this.storeTyped}
    />)
    :
    (<PlayerView
      playerData={this.props.playerData}
    />);
  }
}
PlayerViewContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  playerID: PropTypes.string.isRequired,
  playerData: PropTypes.object,
};

module.exports = PlayerViewContainer;
