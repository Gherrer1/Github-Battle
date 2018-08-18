const React = require('react');
const PlayerView = require('./PlayerView');

class PlayerViewContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      typed: '',
    };

    this.storeTyped = this.storeTyped.bind(this);
  }

  storeTyped(newTyped) {
    this.setState({
      typed: newTyped,
    });
  }

  render() {
    return (
      <PlayerView
        onSubmit={this.props.onSubmit}
        playerID={this.props.playerID}
        playerData={this.props.playerData}
        handleType={this.storeTyped}
        typedText={this.state.typed}
      />
    );
  }
}

module.exports = PlayerViewContainer;
