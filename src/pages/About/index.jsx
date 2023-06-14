import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import HeroImgAbout from '../../asset/background-img-2.png'
import React from 'react';
import Collapse from '../../components/Collapse'

const text = ''


function About() {
    return (
        <div>
        <Header />
        <div className='page'>
                <Hero text={text} img={HeroImgAbout} />
                <Collapse/>
        </div>
        <Footer />
    </div>  
    )
}

export default About