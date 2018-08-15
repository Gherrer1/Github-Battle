var React = require('react');
var PropTypes = require('prop-types');

function RepoItem(props) {
  return (
    <li className="popular-item">
      <div className="popular-rank">#{props.rank}</div>
      <ul className="space-list-item">
        <li>
          <img
            src={props.repo.owner.avatar_url}
            className="repo-avatar"
            alt={`Avatar for ${props.repo.owner.login}`}
          />
        </li>
        <li><a href={props.repo.html_url} >{props.repo.name}</a></li>
        <li>@{props.repo.owner.login}</li>
        <li>{props.repo.stargazers_count} stars</li>
      </ul>
    </li>
  );
}
RepoItem.propTypes = {
  rank: PropTypes.number.isRequired,
  repo: PropTypes.shape({
    owner: PropTypes.shape({
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired
    }).isRequired,
    stargazers_count: PropTypes.number.isRequired,
    html_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired
};

function ReposList(props) {
  return (
    <ul className="popular-list" >
      {
        props.repos.map((repo, index) => (<RepoItem key={repo.id} rank={index+1} repo={repo} />))
      }
    </ul>
  );
}
ReposList.propTypes = {
  repos: PropTypes.array.isRequired,
};

module.exports = ReposList;
