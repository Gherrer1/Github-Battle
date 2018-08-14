var React = require('react');
var LanguageButton = require('./LanguageButton');
var PropTypes = require('prop-types');

class LanguageButtonList extends React.Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = { activeIndex: 0 };
  }

  handleButtonClick(lang) {
    var newActiveIndex = this.props.languages.indexOf(lang);
    this.setState({
      activeIndex: newActiveIndex
    });
  }

  render() {
    let that = this;

    return (
      <ul className="lang-list">
        {this.props.languages.map(function(lang, index) {
          return (
            <li key={index} className="lang-li">
              <LanguageButton
                language={lang}
                active={that.state.activeIndex === index}
                handleButtonClick={that.handleButtonClick}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
LanguageButtonList.propTypes = {
  languages: PropTypes.array.isRequired
};

module.exports = LanguageButtonList;
