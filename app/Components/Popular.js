var React = require('react');

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
        Popular!
        <ul className="languages">
          {languages.map(lang =>
            (
              <li key={lang} style={lang === this.state.selectedLang ? { color: '#d0021b' } : null } onClick={ () => this.handleClick(lang) } >
                {lang}
              </li>
            )
          )}
        </ul>
      </div>
    );
  }
}

module.exports = Popular;
