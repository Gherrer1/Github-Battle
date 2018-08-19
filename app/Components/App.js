const React = require('react');
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
const Nav = require('./Nav');
const Popular = require('./Popular');
const Home = require('./Home');
const Battle = require('./Battle');
const BattleGround = require('./BattleGround');

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
            <Route path='/battle/results' component={BattleGround} />
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
