import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import { RiMenuFoldFill, RiMenuUnfoldFill } from 'react-icons/ri';
import Nav from './Nav';

const Header = () => {
  const [hideMenu, setHideMenu] = useState(true);
  const [mdWindow, setMdWindow] = useState(true);
  const [mWindow, setMWindow] = useState(false);

  useEffect(() => {
    const handleMenu = () => {
      if (window.innerWidth > 1024) {
        setHideMenu(true);
        setMdWindow(true);
      }
      if (window.innerWidth < 1024) {
        // setHideMenu(true);
        setMdWindow(false);
        setMWindow(true);
      }
    };
    window.addEventListener('resize', handleMenu);

    return () => {
      window.removeEventListener('resize', handleMenu);
    };
  }, []);

  return (
    <>
      <header className='absolute top-2 left-0 w-full flex justify-between z-20'>
        <div>
          <Link to='/'>
            <img
              src={logo}
              className='ml-2 h-10 w-10 lg:h-[50px] lg:mt-3 lg:w-[50px]'
              alt='logo'
            />
          </Link>
        </div>
        <div
          className={`nav absolute top-[50px]  left-[6vw] ${
            hideMenu ? 'hidden' : ''
          }`}
        >
          <ul className=''>
            <li onClick={() => setHideMenu(true)} className='link'>
              <Link className='link-item' to='/'>
                <span className='link-span'>00</span>Home
              </Link>
            </li>
            <li onClick={() => setHideMenu(true)} className='link'>
              <Link className='link-item' to='/destination'>
                <span className='link-span'>01</span> Destinations
              </Link>
            </li>
            <li onClick={() => setHideMenu(true)} className='link'>
              <Link className='link-item' to='/crew'>
                <span className='link-span'>02</span>Crew
              </Link>
            </li>
            <li onClick={() => setHideMenu(true)} className='link'>
              <Link className='link-item' to='/technology'>
                <span className='link-span'>03</span>Technology
              </Link>
            </li>
          </ul>
        </div>
        <div className='hidden lg:flex'>
          <Nav mWindow={mWindow} />
        </div>
        <div className='lg:hidden'>
          {hideMenu ? (
            <RiMenuFoldFill
              onClick={() => setHideMenu(!hideMenu)}
              className='text-3xl mr-5 cursor-pointer  hover:scale-110 transition duration-100 ease-in'
            />
          ) : (
            <RiMenuUnfoldFill
              onClick={() => setHideMenu(!hideMenu)}
              className='text-3xl mr-5 cursor-pointer  hover:scale-110 transition duration-100 ease-in'
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
