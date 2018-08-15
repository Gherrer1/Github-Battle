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
    this.fetchPopularRepos = this.fetchPopularRepos.bind(this);
  }

  componentDidMount() {
    this.fetchPopularRepos();
  }

  // I was questioning whether this function belongs in the component as an instance method or as a static method.
  // I think as an instance method because it uses and sets the state of the instance it's called on.
  fetchPopularRepos() {
    api.fetchPopularRepos(this.state.selectedLang)
      .then(repos => console.log(repos) || repos.map(repo => ({
        stars: repo.stargazers_count,
        avatar_url: repo.owner.avatar_url,
        name: repo.name,
        owner_name: repo.owner.login,
        id: repo.id
      })))
      .then(repos => this.setState({
        repoData: repos
      }));
  }

  handleClick(lang) {
    this.setState({
        selectedLang: lang
    }, this.fetchPopularRepos);
  }

  render() {
    var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    return (
      <div>
        <SelectLanguage languages={languages} handleClick={this.handleClick} activeLang={this.state.selectedLang} />
        <RepoInfoList repoList={this.state.repoData} />
      </div>
    );
  }
}

module.exports = Popular;
