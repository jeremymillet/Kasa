import '../../styles/Hero.scss';
import React from 'react';

function Hero(props) {
    return (
        <div className="hero">
            <div className='hero-overlay'>
            </div>
            <img className='hero-img' src={props.img} alt="" />
            <h1 className="hero-text">{props.text}</h1>
        </div>
    )
}


export default Hero