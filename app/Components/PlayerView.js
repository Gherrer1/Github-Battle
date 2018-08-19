const React = require('react');
const PropTypes = require('prop-types');

function PlayerView(props) {
    console.log(props.children);
    return (
        <div className="player-item">
          <div className="column">
              <img src={props.playerData.avatar_url} className="usr-img"/>
              <h2 className='username'>@{props.playerData.login}</h2>
              {props.children}
          </div>
        </div>
    );
  }
  PlayerView.propTypes = {
    playerData: PropTypes.object,
    onReset: PropTypes.func.isRequired,
    playerID: PropTypes.string.isRequired,
  };

  module.exports = PlayerView;
