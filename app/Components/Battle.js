const React = require('react');
const PropTypes = require('prop-types');
const PlayerViewContainer = require('./PlayerViewContainer');
// import {Link} from 'react-router-dom';

class Battle extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    'Player One': null,
    'Player Two': null,
  };

  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleSubmit(event, username, playerID) {
    event.preventDefault();
    this.setState({
      [playerID]: {
        login: username,
        avatar_url: `https://github.com/${username}.png?size=200`,
      },
    });
  }

  fetchUserData(username, playerID) {
    const api = require('../utils/api');
    console.log(username, playerID);
    api.fetchUser(username)
      .then((users) => console.log(users) || {
        login: users[0].login,
        avatar_url: users[0].avatar_url,
      })
      .then((minimalUserData) => this.setState({
        [playerID]: minimalUserData,
      }));
  }

  render() {
    return (
      <div>
        <div className="row">
          <PlayerViewContainer
            onSubmit={this.handleSubmit}
            playerID="Player One"
            playerData={this.state['Player One']}
          />
          <PlayerViewContainer
            onSubmit={this.handleSubmit}
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
Battle.propTypes = {
  match: PropTypes.object,
};

module.exports = Battle;
