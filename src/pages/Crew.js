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
      <div className='absolute top-[65px] ml-5 text-center lg:text-3xl text-xl uppercase font-medium'>
        <span className='mr-2 text-gray-500 text-2xl lg:text-5xl font-semibold'>
          02
        </span>
        Meet your crew
      </div>
      <div className='absolute top-[80px] w-full'>
        <div className=''>
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
            className='h-[240px] object-cover mx-auto '
          />
        </div>
        <div className='w-full'>
          <div className='flex w-[100px] justify-between mx-auto mt-5'>
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
            <h1 className='text-[18px] text-gray-400 uppercase'>{role}</h1>
            <h1 className='text-2xl uppercase my-2'>{name}</h1>
            <div className='w-[300px] mx-auto text-sm mt-3'>{bio}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
