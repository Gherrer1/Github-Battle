const React = require('react');
const PropTypes = require('prop-types');

function Result({playerData}) {
    let p = playerData;

    return (
        <div className="column">
            <h2>{p.won ? 'Winner' : 'Loser'}</h2>
            <h2>Score: {p.score}</h2>
            <img
                className="usr-img"
                alt={`Avatar for ${p.profile.login}`}
                src={p.profile.avatar_url}
            />
            <h2>@{p.profile.login}</h2>
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
        </div>
    );
};
Result.proptypes = {
    playerData: PropTypes.object.isRequired,
};

module.exports = Result;
