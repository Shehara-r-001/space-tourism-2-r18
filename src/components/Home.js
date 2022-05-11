import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-bg h-screen bg-cover bg-no-repeat w-full bg-center'>
      <div className='flex h-screen flex-col items-center justify-center lg:justify-start px-10 lg:flex-row transition-all duration-300'>
        <div className='lg:max-w-[40%] lg:ml-60 lg:mt-10'>
          <h1 className='flex flex-col items-center uppercase text-xl text-gray-300 lg:items-start'>
            So you want to travel to
            <span className='text-[40px] sm:text-[60px] uppercase lg:my-10 my-6 text-white sm:my-8'>
              space
            </span>
          </h1>
          <p className='text-center text-gray-300 lg:text-justify lg:max-w-[300px] sm:max-w-[400px] '>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well, sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <button className='h-40 w-40 lg:h-56 lg:w-56 lg:mt-20 text-xl text-gray-600 bg-white rounded-full uppercase mt-10 animate-pulse font-semibold lg:ml-[180px] lg:text-2xl'>
            <Link to='/destinaton'>Explore</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
