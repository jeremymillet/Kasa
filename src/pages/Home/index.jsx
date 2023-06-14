import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import '../../styles/main.scss';
import '../../styles/home.scss';
import HeroImgHome from '../../asset/background-img-1.png';
import React from 'react';
import Logement from '../../data/logements.json'

const logement = Logement
const text = 'Chez vous, partout et ailleurs'


function Home() {
    return (
    <div>
        <Header />
        <div className='page'>
            <Hero text={text} img={HeroImgHome} />
            <div className='cards-container'>
                {logement.map(({ id,cover,title,description}) => (
                    <Card
                        key={id}
                        title={title}
                        cover={cover}
                        description = {description}
                    /> 
                ))}
            </div>
        </div>
        <Footer />
    </div>  
    )
}

export default Home