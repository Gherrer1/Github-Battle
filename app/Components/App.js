var React = require('react');
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
var Nav = require('./Nav');
var Popular = require('./Popular');
var Home = require('./Home');
var Battle = require('./Battle');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <br />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/popular" component={Popular} />
            {/* Default route for not found pages - 404 */}
            <Route render={() => (<p>Not Found.</p>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;
