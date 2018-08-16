const React = require('react');
import { Link } from 'react-router-dom';

var Home = () => (
  <div id="home">
    <h3 className="home-title">Github Battle: Battle your friends... and stuff.</h3>
    <Link to="/battle">Battle</Link>
  </div>
);

module.exports = Home;
