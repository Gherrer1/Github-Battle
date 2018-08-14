var React = require('react');
var PropTypes = require('prop-types');

class LanguageButton extends React.Component {
  render() {
    var that = this;
    return (
      <button className={`${this.props.active ? "active" : false} lang-btn`} onClick={that.handleClick.bind(that)} >{this.props.language}</button>
    );
  }

  handleClick() {
    this.props.handleButtonClick(this.props.language);
  }
}
LanguageButton.propTypes = {
  language: PropTypes.string.isRequired,
  active: PropTypes.bool,
  handleButtonClick: PropTypes.func.isRequired
}

module.exports = LanguageButton;
