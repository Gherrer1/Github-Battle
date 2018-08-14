var React = require('react');
var LanguageButtonList = require('./LanguageButtonList');

class App extends React.Component {
  render() {
    return (
      <div>
        <LanguageButtonList languages={ ["All", "Java", "Python", "Swift"] }/>
        Hello React Training!
      </div>
    );
  }
}

module.exports = App;
