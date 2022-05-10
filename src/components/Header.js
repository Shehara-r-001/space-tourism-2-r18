import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';

const Header = () => {
  return (
    <>
      <header className='absolute top-0 left-0'>
        <Link to='/'>
          <img src={logo} className='' alt='logo' />
        </Link>
      </header>
    </>
  );
};

export default Header;
