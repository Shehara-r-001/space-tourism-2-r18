import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';

const Header = () => {
  return (
    <>
      <header>
        <Link to='/'>
          <img src={logo} className='' alt='logo' />
        </Link>
      </header>
    </>
  );
};

export default Header;
