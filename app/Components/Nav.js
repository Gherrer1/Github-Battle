const React = require('react');
const NavLink = require('react-router-dom').NavLink;

function Nav() {
  return (
    <div id="links">
      <NavLink exact activeClassName="active" to="/">Home</NavLink>
      <NavLink activeClassName="active" to="/battle">Battle</NavLink>
      <NavLink activeClassName="active" to="/popular">Popular</NavLink>
    </div>
  );
}

module.exports = Nav;
