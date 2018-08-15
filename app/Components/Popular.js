var React = require('react');
var PropTypes = require('prop-types');

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
      selectedLang: "All"
    };

    this.handleClick = this.handleClick.bind(this);
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
      </div>
    );
  }
}

module.exports = Popular;
