import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>Javascript</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>React.js</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>Node.js</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>MySQL</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>MongoDB</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>Docker</h6>
          </Link>
          <span>John</span>
          <span>Logout</span>
          <span className="write">
            <Link to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
