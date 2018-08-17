const React = require('react');
const PlayerViewContainer = require('./PlayerViewContainer');

class Battle extends React.Component {
  render() {
    return (
      <div className="battle-view">
        <PlayerViewContainer playerNumber="One"/>
        <PlayerViewContainer playerNumber="Twleve"/>
      </div>
    );
  }
}

module.exports = Battle;
