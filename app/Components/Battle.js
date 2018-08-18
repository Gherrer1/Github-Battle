const React = require('react');
const PlayerViewContainer = require('./PlayerViewContainer');
// import {Link} from 'react-router-dom';

class Battle extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    'Player One': null,
    'Player Two': null,
  };

  this.fetchUserData = this.fetchUserData.bind(this);
}

  fetchUserData(username, playerID) {
    const api = require('../utils/api');
    console.log(username, playerID);
    api.fetchUser(username)
      .then((users) => console.log(users) || this.setState({
        [playerID]: users[0],
      }));
  }

  render() {
    return (
      <div>
        <div className="battle-view">
          <PlayerViewContainer
            onSubmit={this.fetchUserData}
            playerID="Player One"
            playerData={this.state['Player One']}
          />
          <PlayerViewContainer
            onSubmit={this.fetchUserData}
            playerID="Player Two"
            playerData={this.state['Player Two']}
          />
        </div>
        {this.state['PlayerOne'] !== null && this.state['Player Two'] !== null ?
          <div className="play-btn">
            {/* {<Link to="/">Play</Link>} */}
            {JSON.stringify(this.props.match)}
          </div>
          :
          null
        }
      </div>
    );
  }
}

module.exports = Battle;
