import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        <h1>
          So you want to travel to <span>space</span>
        </h1>
        <p>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well, sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
        <button>
          <Link to='/destinaton'>Explore</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
