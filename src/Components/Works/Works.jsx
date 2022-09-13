import React from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';

const Works = () => {
  return (
    <div className="works">
      <div className="works-left">
        <div className="services-left">
          <span>Works for All these</span>
          <span>Brands & Clients</span>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique.
            <br />
            explicabo accusamus nulla libero tenetur enim dicta aperiam quodr   
            quia blanditiis?
            <br />
            Aperiam repudiandae minus temporibus voluptate!
          </span>
          <button className="button s-button">Hire Me</button>
          <div
            className="blur s-blur1"
            style={{ background: '#ABF1FF94' }}
          ></div>
        </div>
      </div>

      <div className="works-right">
        <div className="works-main-circle">
          <div className="works-sec-circle">
            <img src={Upwork} alt="Upwork" />
          </div>
          <div className="works-sec-circle">
            <img src={Fiverr} alt="Fiverr" />
          </div>
          <div className="works-sec-circle">
            <img src={Amazon} alt="Amazon" />
          </div>
          <div className="works-sec-circle">
            <img src={Shopify} alt="Shopify" />
          </div>
          <div className="works-sec-circle">
            <img src={Facebook} alt="Facbook" />
          </div>
        </div>

        {/* Background circles */}
        <div className="works-back-circle blue-circle"></div>
        <div className="works-back-circle yellow-circle"></div>
      </div>
    </div>
  );
};

export default Works;
