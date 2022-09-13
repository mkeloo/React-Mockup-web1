import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import GitHub from '@iconscout/react-unicons/icons/uil-github';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="Wave" style={{ width: '100%' }} />
      <div className="footer-content">
        {/* <span>mokshkeloo@gmail.com</span> */}
        <span>© 2022 Moksh Keloo</span>
        <div className="footer-icons">
          <Insta color="white" size="3.5rem" />
          <Facebook color="white" size="3.5rem" />
          <GitHub color="white" size="3.5rem" />
          <LinkedIn color="white" size="3.5rem" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
