const React = require('react');
const PlayerView = require('./PlayerView');

class PlayerViewContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null
    };
  }

  render() {
    return (
      <PlayerView username={this.state.username} playerNumber={this.props.playerNumber} />
    );
  }
}

module.exports = PlayerViewContainer;
