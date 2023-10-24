import React from 'react';
import Profile from '../assets/fox-8318961_1280.png'

const Hero = () => {
    return (
        <div className="staff-member">
        <img
          src={Profile} 
          alt="Staff Member"
          className="staff-image"
        />
        <div className="staff-details">
          <h2 className="staff-name">John Doe</h2>
          <p className="staff-title">Web Developer</p>
          <p className="staff-bio">
            John Doe is a talented web developer with a passion for creating
            amazing web applications. He has expertise in front-end and
            back-end technologies and is dedicated to delivering high-quality
            solutions.
          </p>
        </div>
      </div>
    );
};

export default Hero;