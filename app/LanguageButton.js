var React = require('react');

class LanguageButton extends React.Component {
  render() {
    return (
      <button className={`${this.props.active ? "active" : false} lang-btn`} >{this.props.language}</button>
    );
  }
}

module.exports = LanguageButton;
