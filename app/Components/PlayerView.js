const React = require('react');
var unused = "Jeyy";
class PlayerView extends React.Component {
  render() {
    return (
      <div className="player-item">
        <h1>Player {this.props.playerNumber}</h1>
        <input type="text" placeholder="github username"/>
        <br />
        <button>Submit</button>
      </div>
    );
  }
}

module.exports = PlayerView;
