var React = require('react');
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
var Popular = require('./Popular');
var Home = require('./Home');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div id="links">
            <Link to="/">Home</Link>
            <Link to="/battle">Battle</Link>
            <Link to="/popular">Popular</Link>
          </div>
          <br />
          <Route exact path="/" component={Home} />
          <Route path="/popular" component={Popular} />
        </div>
      </Router>
    );
  }
}

module.exports = App;
