import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav() {
  return (
    <div id="links">
      <NavLink exact activeClassName="active" to="/">Home</NavLink>
      <NavLink activeClassName="active" to="/battle">Battle</NavLink>
      <NavLink activeClassName="active" to="/popular">Popular</NavLink>
    </div>
  );
}

export default Nav;
