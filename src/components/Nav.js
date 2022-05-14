import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ mWindow }) => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <ul className='flex bg-white-rgba mr-[10vw] mt-3 pr-2 justify-around w-[60vw] backdrop-blur-[2px]'>
        <li className='link'>
          <Link className='link-item' to='/'>
            <span className='link-span font-bold'>00</span>Home
          </Link>
        </li>
        <li className='link'>
          <Link className='link-item' to='/destination'>
            <span className='link-span font-bold'>01</span>Destinations
          </Link>
        </li>
        <li className='link'>
          <Link className='link-item' to='/crew'>
            <span className='link-span font-bold'>02</span>Crew
          </Link>
        </li>
        <li className='link'>
          <Link className='link-item' to='/technology'>
            <span className='link-span font-bold'>03</span>Technology
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
