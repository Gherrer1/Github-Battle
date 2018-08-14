var React = require('react');
var PropTypes = require('prop-types');

class LanguageButton extends React.Component {
  render() {
    return (
      <button className={`${this.props.active ? "active" : false} lang-btn`} >{this.props.language}</button>
    );
  }
}
LanguageButton.propTypes = {
  language: PropTypes.string.isRequired,
  active: PropTypes.bool
}

module.exports = LanguageButton;
