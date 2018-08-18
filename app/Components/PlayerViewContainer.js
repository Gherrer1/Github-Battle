const React = require('react');
const PlayerView = require('./PlayerView');

class PlayerViewContainer extends React.Component {
  render() {
    return (
      <PlayerView
        onSubmit={this.props.onSubmit}
        playerID={this.props.playerID}
        playerData={this.props.playerData}
      />
    );
  }
}

module.exports = PlayerViewContainer;
