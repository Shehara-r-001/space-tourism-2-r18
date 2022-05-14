import React, { useState } from 'react';
import ansari from '../assets/crew/image-anousheh-ansari.png';
import hurley from '../assets/crew/image-douglas-hurley.png';
import mark from '../assets/crew/image-mark-shuttleworth.png';
import victor from '../assets/crew/image-victor-glover.png';
import { VscCircleLargeOutline, VscCircleLargeFilled } from 'react-icons/vsc';

const data = require('../data.json');

const Crew = () => {
  const [dataCrew] = useState(data.crew);
  const [item, setItem] = useState(0);

  const { name, images, role, bio } = dataCrew[item];
  return (
    <div className='crew-bg h-screen w-full object-cover'>
      <div className='absolute top-[70px] left-[30vw] lg:left-0 lg:top-[24vh] text-center lg:text-3xl text-xl uppercase font-medium w-[40vw] lg:ml-[10vw]'>
        <span className='mr-2 text-gray-500 lg:text-5xl font-semibold text-4xl'>
          02
        </span>
        Meet your crew
      </div>
      <div className='absolute top-[70px] sm:mt-8 mt-[64px] w-full lg:justify-between lg:w-[90vw] lg:-left-[10vw] lg:top-[30vh] sm:flex sm:flex-col-reverse lg:flex-row-reverse'>
        <div className='mt-4 lg:absolute lg:-right-[120px] lg:-bottom-[100px]'>
          <img
            src={
              item === 0
                ? hurley
                : item === 1
                ? mark
                : item === 2
                ? victor
                : item === 3
                ? ansari
                : ''
            }
            alt={name}
            className='h-[240px] object-cover mx-auto lg:h-[400px]'
          />
        </div>
        <div className='w-full lg:flex lg:flex-col-reverse lg:mt-8'>
          <div className='flex w-[100px] lg:w-[160px] justify-between mx-auto mt-5 lg:mt-10'>
            {dataCrew.map((person, index) => (
              <button key={index} onClick={() => setItem(index)} className=''>
                {index === item ? (
                  <VscCircleLargeFilled className='dot-icon' />
                ) : (
                  <VscCircleLargeOutline className='dot-icon' />
                )}
              </button>
            ))}
          </div>
          <div className='w-full text-center mt-6'>
            <h1 className='text-[18px] sm:text-[20px] lg:text-2xl text-gray-400 uppercase'>
              {role}
            </h1>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl lg:mt-4 uppercase my-2'>
              {name}
            </h1>
            <div className='w-[300px] lg:w-[360px] lg:mt-6 lg:text-[16px] mx-auto text-sm mt-3 lg:text-justify'>
              {bio}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
