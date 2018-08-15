var React = require('react');

function RepoInfo(props) {
  return (
    <li>
      <p>Rank: #{props.rank}</p>
      <div>
        <img src={props.avatar_url} style={{ height: '100px', width: '100px' }} className="repo-avatar" />
      </div>
      <p>{props.name}</p>
      <p>@{props.owner_name}</p>
      <p>{props.stars} stars</p>
    </li>
  );
}

function RepoInfoList(props) {
  return (
    <ul id="repo-list">
      {props.repoList.map((repoInfo, index) => (
        <RepoInfo key={repoInfo.id} rank={index+1} {...repoInfo} />
      ))}
    </ul>
  );
}

module.exports = RepoInfoList;
