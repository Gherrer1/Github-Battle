const React = require('react');
const PropTypes = require('prop-types');

function Result({playerData}) {
    return (
        <div>
            {playerData.name}
        </div>
    );
};
Result.proptypes = {
    playerData: PropTypes.object.isRequired,
};

module.exports = Result;
