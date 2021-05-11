import React from 'react'
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {

  const navstyle={
    color:'dark'
  }

  return (
    <nav>
        <ul className="nav-links">
            <Link style={navstyle} to="/abc" >
            <li>Login</li>            
            </Link>    
        </ul>
    </nav>
    
  );
}

export default Nav;
