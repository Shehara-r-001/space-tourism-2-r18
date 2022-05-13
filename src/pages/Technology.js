import React, { useState } from 'react';
import vehicleP from '../assets/technology/image-launch-vehicle-portrait.jpg';
import capsuleP from '../assets/technology/image-space-capsule-portrait.jpg';
import spaceportP from '../assets/technology/image-spaceport-portrait.jpg';
import vehicleL from '../assets/technology/image-launch-vehicle-landscape.jpg';
import capsuleL from '../assets/technology/image-space-capsule-landscape.jpg';
import spaceportL from '../assets/technology/image-spaceport-landscape.jpg';
import { VscCircleLargeOutline, VscCircleLargeFilled } from 'react-icons/vsc';

const data = require('../data.json');

const Technology = () => {
  const [dataC] = useState(data.technology);
  const [item, setItem] = useState(0);

  const { name, images, description } = dataC[item];

  return (
    <div className='tech-bg h-screen w-full'>
      <div>
        <div>
          <p>
            <span>03</span>Space launch 101
          </p>
        </div>
        <div>
          <div>
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
              className='h-[300px]'
            />
          </div>
          <div>
            {dataC.map((tech, index) => (
              <button onClick={() => setItem(index)}>
                <VscCircleLargeOutline />
              </button>
            ))}
          </div>
          <div>
            <div>
              <p>The technology</p>
              <p>{name}</p>
            </div>
            <div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
