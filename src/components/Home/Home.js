import React from 'react';
import shoe from './shoe.jpg';
import './Home.css';
const Home = () => {
  return (
    <div className="header">
      <div className="header-title">
        <h1>Your next shoe</h1>
        <h1 className="sec-title">Your best shoe</h1>
        <p>This show is a showcase of the best shoes in the world.</p>
      </div>

      <div>
        <img src={shoe} alt="" height={200} width={200} />
      </div>
    </div>
  );
};

export default Home;
