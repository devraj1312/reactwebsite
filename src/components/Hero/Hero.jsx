import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure better education for a better world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit quidem repellendus, optio earum fugiat!</p>
            <button className='btn'>Explore More<img src={dark_arrow}></img></button>
        </div>

    </div>
  )
}

export default Hero