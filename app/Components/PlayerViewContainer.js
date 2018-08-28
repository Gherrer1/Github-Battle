const React = require('react');
const PropTypes = require('prop-types');
const PlayerView = require('./PlayerView');

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

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    playerID: PropTypes.string.isRequired,
    playerData: PropTypes.object,
    onReset: PropTypes.func.isRequired,
  };

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
    (<PlayerView playerData={this.props.playerData}>
      <button onClick={
        () => this.props.onReset(this.props.playerID) || this.resetUsername()
        }
      >Reset
      </button>
    </PlayerView>);
  }
}

module.exports = PlayerViewContainer;
