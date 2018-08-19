const React = require('react');
const PropTypes = require('prop-types');
const PlayerViewContainer = require('./PlayerViewContainer');
import {Link} from 'react-router-dom';

class Battle extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    'Player One': null,
    'Player Two': null,
  };

  this.handleSubmit = this.handleSubmit.bind(this);
  this.resetUser = this.resetUser.bind(this);
}

  resetUser(playerID) {
    this.setState({
      [playerID]: null,
    });
  }

  handleSubmit(event, username, playerID) {
    event.preventDefault();
    let trimmedUsername = username.trim();
    this.setState({
      [playerID]: {
        login: trimmedUsername,
        avatar_url: `https://github.com/${trimmedUsername}.png?size=200`,
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
    let match = this.props.match;
    let p1 = this.state['Player One'];
    let p2 = this.state['Player Two'];
    return (
      <div>
        <div className="row">
          <PlayerViewContainer
            onSubmit={this.handleSubmit}
            playerID="Player One"
            playerData={p1}
            onReset={this.resetUser}
          />
          <PlayerViewContainer
            onSubmit={this.handleSubmit}
            playerID="Player Two"
            playerData={p2}
            onReset={this.resetUser}
          />
        </div>
        {p1 && p2 &&
          <Link
            className='button'
            to={{
              pathname: `${match.url}/results`,
              search: `?playerOneName=${p1.login}&playerTwoName=${p2.login}`,
            }}
          >
            Battle
          </Link>
        }
      </div>
    );
  }
}
Battle.propTypes = {
  match: PropTypes.object,
};

module.exports = Battle;
