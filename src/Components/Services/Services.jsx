import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from '../../img/musicapp.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services">
      {/* Left Side */}
      <div className="services-left">
        <span style={{ color: darkMode ? '#fff' : '' }}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          aperiam?
          <br />
          Lorem ipsum dolor sit amet adipisicing!
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
      </div>
      {/* Right Side */}
      <div className="services-right">
        <div style={{ top: '0rem', left: '14rem' }} className="card1">
          <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={'Figma, Sketch, Adobe XD, Photoshop, Illustrator'}
          />
        </div>

        <div style={{ top: '15rem', left: '-4rem' }}>
          <Card
            emoji={Glasses}
            heading={'Developer'}
            detail={'HTML, CSS, JavaScript, React, Node, Express, MongoDB'}
          />
        </div>

        <div style={{ top: '23rem', left: '20rem' }}>
          <Card
            emoji={Humble}
            heading={'UI/UX'}
            detail={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: 'var(--purple)' }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
