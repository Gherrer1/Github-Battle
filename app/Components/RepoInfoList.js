var React = require('react');

function RepoInfo(props) {
  return (
    <div>
      <p>Rank: #{props.rank}</p>
      <div>
        <img src={props.avatar_url} style={{ height: '100px', width: '100px' }}/>
      </div>
      <p>{props.name}</p>
      <p>@{props.owner_name}</p>
      <p>{props.stars} stars</p>
    </div>
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
