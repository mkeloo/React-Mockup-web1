import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi! I Am</span>
                <span>Mickey Keloo</span>
                <span>Front-End Developer with high level of experience in Web Design and Development to produce Quality work.</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <a href="https://www.github.com" target="_blank"><img src={Github} alt="GitHub" /></a>
             <a href="https://www.linkedin.com" target="_blank"><img src={Linkedin} alt="LinkedIn" /></a>
              <a href="https://www.instagram.com" target="_blank"><img src={Instagram} alt="Instagram" /></a>
                
                
            </div>
        </div>
        <div className="i-right">
            Right Side
        </div>
    </div>
  )
}
 
export default Intro