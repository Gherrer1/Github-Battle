const React = require('react');
const PropTypes = require('prop-types');

function PlayerView(props) {
  return (
      <div className="player-item">
        <div className="column">
            <img src={props.playerData.avatar_url} className="usr-img"/>
            <h2 className='username'>@{props.playerData.login}</h2>

            <button onClick={() => props.onReset(props.playerID)}>Reset</button>
        </div>
      </div>
  );
}
PlayerView.propTypes = {
  playerData: PropTypes.object,
  onReset: PropTypes.func.isRequired,
  playerID: PropTypes.string.isRequired,
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
    this.resetUsername = this.resetUsername.bind(this);
  }

  resetUsername() {
    this.setState({
      username: '',
    });
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
      playerID={this.props.playerID}
      onReset={
        (playerID) => this.props.onReset(playerID) || this.resetUsername()
      }
    />);
  }
}
PlayerViewContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  playerID: PropTypes.string.isRequired,
  playerData: PropTypes.object,
  onReset: PropTypes.func.isRequired,
};

module.exports = PlayerViewContainer;
