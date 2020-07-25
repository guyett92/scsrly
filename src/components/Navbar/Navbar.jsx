import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => (
    <div>
        {props.user ? 
        <div>
          <Link to="" onClick={props.handleLogout} className="NavBar-link">LOG OUT</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <span>Welcome, {props.user.name}!</span>
        </div>
        :
        <div>
          <Link to="/login">LOG IN</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link to="/signup">SIGN UP</Link>
        </div>
      }
    </div>
);

export default Navbar;