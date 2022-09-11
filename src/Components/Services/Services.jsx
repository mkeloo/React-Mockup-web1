import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'

const Services = () => {
  return (
    <div className="services">
        {/* Left Side */}
        <div className="services-left">
            <span>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, aperiam?
                <br />
                Lorem ipsum dolor sit amet adipisicing!
            </span>
            <button className='button s-button'>Download CV</button>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* Right Side */}
        <div className="services-right">
            <div>
                <Card 
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {'Figma, Sketch, Adobe XD, Adobe Photoshop, Adobe Illustrator'}
                />
            </div>
        </div>
    </div>
  )
}

export default Services