var React = require('react');
var ReactDOM = require('react-dom');
var LanguageButtonList = require('./LanguageButtonList');
require('./index.css');

// state
// lifecycle event
// UI

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

ReactDOM.render(<App />, document.getElementById('app'));
