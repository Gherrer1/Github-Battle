var React = require('react');
var PropTypes = require('prop-types');
var RepoInfoList = require('./RepoInfoList');
var api = require('../utils/api');

function SelectLanguage(props) {
  return (
    <div>
      <ul className="languages">
        {props.languages.map(lang =>
          (
            <li key={lang} style={lang === props.activeLang ? { color: '#d0021b' } : null } onClick={ () => props.handleClick(lang) } >
              {lang}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
SelectLanguage.propTypes = {
  languages: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  activeLang: PropTypes.string.isRequired
};

class Popular extends React.Component {
  /* Sets initial state of the component */
  constructor(props) {
    super(props);

    this.state = {
      selectedLang: "All",
      repoData: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    var that = this;
    api.fetchPopularRepos('Javascript')
      .then(repos => console.log(repos) || repos)
      .then(repos => repos.map(repo => ({
          stars: repo.stargazers_count,
          avatar_url: repo.owner.avatar_url,
          name: repo.name,
          owner_name: repo.owner.login,
          id: repo.id
        }))
      )
      .then(repos => that.setState({
        repoData: repos
      }));
  }

  handleClick(lang) {
    this.setState(function() {
      return {
        selectedLang: lang
      }
    });
  }

  render() {
    var languages = ["All", "Python", "Java", "Swift", "CSS"];
    return (
      <div>
        <SelectLanguage languages={languages} handleClick={this.handleClick} activeLang={this.state.selectedLang} />
        <RepoInfoList repoList={this.state.repoData} />
      </div>
    );
  }
}

module.exports = Popular;
