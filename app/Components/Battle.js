const React = require('react');
const PlayerView = require('./PlayerView');

class Battle extends React.Component {
  render() {
    return (
      <div>
        <PlayerView playerNumber="One" />
        <PlayerView playerNumber="Two" />
      </div>
    );
  }
}

module.exports = Battle;
