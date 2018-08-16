var React = require('react');
import { BrowserRouter as Router, Route } from 'react-router-dom';
var Nav = require('./Nav');
var Popular = require('./Popular');
var Home = require('./Home');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <br />
          <Route exact path="/" component={Home} />
          <Route path="/popular" component={Popular} />
        </div>
      </Router>
    );
  }
}

module.exports = App;
