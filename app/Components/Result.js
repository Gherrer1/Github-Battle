const React = require('react');
const PropTypes = require('prop-types');

function Result({playerData}) {
    let p = playerData;
    return (
        <ul>
            {
                [p.avatar_url, p.bio, p.company, p.id, p.location, p.login, p.name].map((field, index) => (
                    <li key={index}>{field}</li>
                ))
            }
        </ul>
    );
};
Result.proptypes = {
    playerData: PropTypes.object.isRequired,
};

module.exports = Result;
