import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar">
      <Link to="/search">
        Galler<strong>easy</strong>
      </Link>
      |
      <NavLink
        to="/search"
        activeStyle={{
          color: 'grey'
        }}
      >
        Search
      </NavLink>
      <NavLink
        to="/favourites"
        activeStyle={{
          color: 'grey'
        }}
      >
        Favorites
      </NavLink>
    </nav>
  );
};

export default Navigation;
