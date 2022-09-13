import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import GlassesEmoji from '../../img/glasses-emoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? '#fff' : '' }}>Hi! I Am</span>
          <span>Mickey Keloo</span>
          <span>
            Front-End Developer with high level of experience in web design and
            development to produce quality work.
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://www.github.com" target="_blank" rel="noreferrer">
            <img src={Github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <img src={Linkedin} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="Vector1" />
        <img src={Vector2} alt="Vector2" />
        <img src={Boy} alt="Boy" />
        <img src={GlassesEmoji} alt="Glasses Emoji" />
        <div style={{ top: '4%', left: '68%', transform: 'scale(1.15)' }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: '23.3rem', left: '1rem', transform: 'scale(1.17)' }}>
          <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award" />
        </div>
        {/* Blur Divs */}
        <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
        <div
          className="blur"
          style={{
            background: 'var(--skyblue)',
            top: '20rem',
            width: '21rem',
            left: '-11rem',
            height: '11rem',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
