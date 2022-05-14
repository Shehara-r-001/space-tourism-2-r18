import React, { useState, useEffect } from 'react';
import vehicleP from '../assets/technology/image-launch-vehicle-portrait.jpg';
import capsuleP from '../assets/technology/image-space-capsule-portrait.jpg';
import spaceportP from '../assets/technology/image-spaceport-portrait.jpg';
import vehicleL from '../assets/technology/image-launch-vehicle-landscape.jpg';
import capsuleL from '../assets/technology/image-space-capsule-landscape.jpg';
import spaceportL from '../assets/technology/image-spaceport-landscape.jpg';
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri';

const data = require('../data.json');

const Technology = () => {
  const [dataC] = useState(data.technology);
  const [item, setItem] = useState(0);
  const [landscape, setLandscape] = useState(false);

  // useEffect(() => {
  //   const handleImage = () => {
  //     if (window.innerWidth > 364) {
  //       setLandscape(true);
  //     }
  //     if (window.innerWidth > 768) {
  //       setLandscape(false);
  //     } else {
  //       setLandscape(false);
  //     }
  //   };
  //   window.addEventListener('resize', handleImage);

  //   return () => {
  //     window.removeEventListener('resize', handleImage);
  //   };
  // }, []);

  const { name, images, description } = dataC[item];

  return (
    <div className='tech-bg h-screen w-full'>
      <div className='w-[80vw] absolute top-[10vh] ml-[10vw] lg:flex lg:flex-row-reverse lg:ml-0 lg:w-full lg:top-[34vh]'>
        <div className='w-full text-center mb-3 lg:absolute lg:-top-[15vh] lg:-left-[30vw]'>
          <p className='text-xl lg:text-3xl uppercase'>
            <span className='text-2xl lg:text-5xl text-gray-500 font-semibold mr-2'>
              03
            </span>
            Space launch 101
          </p>
        </div>
        <div>
          <div className=''>
            <img
              src={
                item === 0
                  ? vehicleP
                  : item === 1
                  ? spaceportP
                  : item === 2
                  ? capsuleP
                  : ''
              }
              alt={name}
              className='h-[300px] lg:h-[360px] object-cover mx-auto lg:-mt-8 lg:mx-0'
            />
            {/* {landscape ? (
              <img
                src={
                  item === 0
                    ? vehicleP
                    : item === 1
                    ? spaceportP
                    : item === 2
                    ? capsuleP
                    : ''
                }
                alt={name}
                className='h-[300px] mx-auto'
              />
            ) : (
              <img
                src={
                  item === 0
                    ? vehicleL
                    : item === 1
                    ? spaceportL
                    : item === 2
                    ? capsuleL
                    : ''
                }
                alt={name}
                className='h-[300px] mx-auto'
              />
            )} */}
          </div>
        </div>
        <div className='w-full lg:flex'>
          <div className='flex justify-between w-[200px] items-center mx-auto mt-3 lg:flex lg:flex-col lg:w-[40px] lg:mx-0 lg:ml-[10vw] lg:h-[40vh]'>
            {dataC.map((tech, index) => (
              <button onClick={() => setItem(index)}>
                {index === 0 ? (
                  <RiNumber1
                    className={`crew-btn ${
                      index === item ? 'bg-white text-black' : ''
                    }`}
                  />
                ) : index === 1 ? (
                  <RiNumber2
                    className={`crew-btn ${
                      index === item ? 'bg-white text-black' : ''
                    }`}
                  />
                ) : index === 2 ? (
                  <RiNumber3
                    className={`crew-btn ${
                      index === item ? 'bg-white text-black' : ''
                    }`}
                  />
                ) : (
                  ''
                )}
              </button>
            ))}
          </div>
          <div className='text-center mt-3 lg:ml-[10vw] lg:max-w-[40vw] lg:mt-8'>
            <div>
              <p className='uppercase text-gray-400 sm:text-xl lg:text-2xl'>
                The technology...
              </p>
              <h1 className='text-2xl my-1 lg:my-3 mb-2.5 uppercase sm:text-3xl lg:text-4xl'>
                {name}
              </h1>
            </div>
            <div className='max-w-[80%] lg:w-[100%] lg:max-w-[90%] lg:text-left text-sm mx-auto lg:mt-6'>
              <p className='lg:leading-6 lg:text-[16px]'>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
