import React from 'react';
import shoe from './shoe.jpg';
import './Home.css';
const Home = () => {
  return (
    <div className="header">
      <div>
        <h1>Your next shoe</h1>
        <h1>Your best shoe</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, sequi.
        </p>
      </div>

      <div>
        <img src={shoe} alt="" height={200} width={200} />
      </div>
    </div>
  );
};

export default Home;
