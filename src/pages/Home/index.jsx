import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import './home.scss';
import HeroImgHome from '../../asset/background-img-1.png';
import React from 'react';
import Logement from '../../data/logements.json'

const text = 'Chez vous, partout et ailleurs'

function Home() {
    return (
      <div className="home">
        <Header from="home" />
        <main className="page-containe">
          <Hero text={text} img={HeroImgHome} />
          <section className="cards-container">
            {Logement.map(({ id, cover, title, description }, index) => (
              <Card
                index={index}
                id={id}
                key={id}
                title={title}
                cover={cover}
                description={description}
              />
            ))}
          </section>
        </main>
        <Footer />
      </div>
    );
}

export default Home