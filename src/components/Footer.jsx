import React from 'react';
import Logo from '../img/logo.png';

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with ❤️ and
        {' '}
        <b>React.js - By danricardo88</b>
      </span>
    </footer>
  );
};

export default Footer;
