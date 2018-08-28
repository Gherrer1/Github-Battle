import React from 'react';
import PropTypes from 'prop-types';
import PlayerView from './PlayerView';

function Result({playerData}) {
    let p = playerData;

    return (
        <div className="column">
            <h2>{p.won ? 'Winner' : 'Loser'}</h2>
            <h2>Score: {p.score}</h2>
            <PlayerView playerData={p.profile}>
                <div className="not-centered">
                    <ul>
                        <li>{p.profile.name}</li>
                        <li>{p.profile.location}</li>
                        <li>{p.profile.bio}</li>
                        <li>Followers: {p.profile.followers}</li>
                        <li>Following: {p.profile.following}</li>
                        <li>Public Repos: {p.profile.public_repos}</li>
                    </ul>
                </div>
            </PlayerView>
        </div>
    );
};
Result.proptypes = {
    playerData: PropTypes.object.isRequired,
};

export default Result;
