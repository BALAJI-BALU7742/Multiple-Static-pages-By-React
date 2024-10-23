import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
import './Home.css'; // Import CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-section">
        <h1>Welcome to AKNU MSN Campus, Kakinada</h1>
        <p>AKNU MSN Campus is a leading educational institution offering a wide range of courses and research opportunities in Kakinada.</p>
      </div>

      <div className="button-container">
        <NavLink to="/" className="glass-button">Home</NavLink>
        <NavLink to="/about" className="glass-button">About</NavLink>
        <NavLink to="/departments" className="glass-button">Departments</NavLink>
        <NavLink to="/contact" className="glass-button">Contact Us</NavLink>
      </div>

      <div className="box-section">
        <div className="box">
          <h2>Groups</h2>
          <p>Explore various academic and student groups across the campus.</p>
        </div>
        <div className="box">
          <h2>Placements</h2>
          <p>Our strong placement programs have connected students with leading companies.</p>
        </div>
        <div className="box">
          <h2>Culturals</h2>
          <p>Join vibrant cultural events and celebrations organized year-round.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
