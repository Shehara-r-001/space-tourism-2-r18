import React, { useState, useEffect } from 'react';
import { Img } from 'react-image';
import moon from '../assets/destination/image-moon.png';
import mbBG from '../assets/destination/background-destination-mobile.jpg';

const data = require('../data.json');

const Destinations = () => {
  const [dataDest] = useState(data.destinations);
  const [item, setItem] = useState(0);

  const { name, description, distance, travel } = dataDest[item];
  // https://jsonkeeper.com/b/L7YT

  return (
    <div className='dest-bg h-screen w-full'>
      <div className='absolute top-[80px] w-full lg:flex lg:justify-around lg:top-[30vh]'>
        <div className='lg:w-[40vw]'>
          <div>
            <p className='text-center lg:text-3xl text-2xl uppercase font-medium'>
              <span className='mr-2 text-4xl lg:text-5xl font-semibold'>
                01
              </span>
              Pick your destination
            </p>
          </div>

          <div>
            <img
              src={moon}
              className='h-[200px] w-[200px] lg:h-[280px] lg:w-[280px] mx-auto mt-4 lg:mt-8'
              alt='ggg'
            />
          </div>
        </div>
        <div className='w-full lg:w-[44vw]'>
          <div className='flex items-center justify-between w-[60%] mx-auto mt-4 max-w-[340px]'>
            {dataDest.map((item, index) => (
              <button key={index} className='lg:text-xl'>
                {item.name}
              </button>
            ))}
          </div>
          {/* <div className='lg:flex lg:justify-center lg:items-center lg:max-w-[340px]'> */}
          <h1 className='text-4xl sm:text-[44px] mt-2 sm:mt-4 uppercase text-center lg:mb-6  lg:text-6xl'>
            {name}
          </h1>
          {/* </div> */}
          <p className='mx-auto text-justify w-[300px] sm:w-[360px] text-sm mt-3'>
            {description}
          </p>
          <div className='sm:flex justify-between mx-auto w-[300px] sm:w-[360px] mt-6 lg:mt-8 text-center border-t border-gray-400'>
            <div className='mt-3'>
              <p className='uppercase text-sm lg:text-xl'>avg, distance</p>
              <p className='text-2xl lg:text-4xl'>{distance}</p>
            </div>
            <div className='hidden sm:flex sm:items-center sm:flex-col mt-3'>
              <p className='uppercase text-sm lg:text-xl'>est, time</p>
              <p className='text-2xl lg:text-4xl'>{travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
