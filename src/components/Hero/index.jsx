import './Hero.scss';
import React from 'react';


function Hero(props) {
    const img = props.img
    return (
        <div className="hero">
            <div className={img === '/static/media/background-img-2.abab3f12f4cb82f1dfa1.png' ? 'hero-overlay-about':'hero-overlay'}>
            </div>
            <img className={img === '/static/media/background-img-2.abab3f12f4cb82f1dfa1.png' ? 'hero-img hero-about':'hero-img'} src={props.img} alt="" />
            <h1  className='hero-text'>{props.text}</h1>
        </div>
    )
}

export default Hero