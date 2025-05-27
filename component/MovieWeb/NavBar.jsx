import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/Home" className='nav-link'>Home</Link>
            <Link to="/Series" className='nav-link'>Series</Link>
            <Link to="/Favourites" className='nav-link'>Favourites</Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
