import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import Popular from './Popular';
import Home from './Home';
import Battle from './Battle';
import BattleGround from './BattleGround';

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

export default App;
