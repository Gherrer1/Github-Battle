var React = require('react');
var PropTypes = require('prop-types');
var ReposList = require('./ReposList');
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
      repos: null
    };

    this.updateSelectedLang = this.updateSelectedLang.bind(this);
  }

  componentDidMount() {
    this.updateSelectedLang(this.state.selectedLang);
  }

  updateSelectedLang(lang) {
    this.setState({
      selectedLang: lang,
      repos: null
    });
    api.fetchPopularRepos(lang)
      .then(repos => console.log(repos) || this.setState({ repos }));
  }

  render() {
    var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    return (
      <div>
        <SelectLanguage languages={languages} handleClick={this.updateSelectedLang} activeLang={this.state.selectedLang} />
        {
          !this.state.repos ? 'Loading...' : <ReposList repos={this.state.repos} />
        }
      </div>
    );
  }
}

module.exports = Popular;
