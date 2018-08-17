const React = require('react');
import {Link} from 'react-router-dom';

const Home = () => (
  <div id="home-container">
    <h1 className="home-title">
      Github Battle: Battle your friends... and stuff.
    </h1>
    <Link to="/battle">Battle</Link>
  </div>
);

module.exports = Home;
