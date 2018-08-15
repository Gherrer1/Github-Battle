var React = require('react');

function RepoItem(props) {
  return (
    <li>
      <p>#{props.rank}</p>
      <img src={props.repo.owner.avatar_url} className="repo-avatar" />
      <p>{props.repo.name}</p>
      <p>@{props.repo.owner.login}</p>
      <p>{props.repo.stargazers_count} stars</p>
    </li>
  );
}

function ReposList(props) {
  return (
    <ul className="repo-list" >
      {
        props.repos.map((repo, index) => (<RepoItem key={repo.id} rank={index+1} repo={repo} />))
      }
    </ul>
  );
}

module.exports = ReposList;
