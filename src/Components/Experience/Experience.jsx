import React from 'react';
import './Experience.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience">
      <div className="achievements">
        <div className="circle">8+</div>
        <span style={{ color: darkMode ? '#fff' : '' }}>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievements">
        <div className="circle">20+</div>
        <span style={{ color: darkMode ? '#fff' : '' }}>Completed</span>
        <span>Projects</span>
      </div>
      <div className="achievements">
        <div className="circle">5+</div>
        <span style={{ color: darkMode ? '#fff' : '' }}>Companies</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
