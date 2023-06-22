import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse';
import CollapseEquipement from '../../components/CollapseEquipement';
import Tag from '../../components/Tag';
import Star from '../../components/Star';
import Carousel from '../../components/Carousel';
import './Market.scss';


function Market({logement}) {
  let params = useParams();
  const accLogement = logement.filter(objet => objet.id === params.id)
  return (
    <div>
      <Header />
      <div className='page'>
        <Carousel picture={accLogement[0].pictures} />
        <div className='info-container'>
          <div className='left'>
            <div className='title-container'>
              <h1>{accLogement[0].title}</h1>
              <h2>{accLogement[0].location}</h2>
            </div>
            <Tag className='tag-container' tags={accLogement[0].tags} keys={'tags'} /> 
          </div>
          <div className='right'>
            <div className='profil-container'>
              <p className='profil-name'>{accLogement[0].host.name}</p>
              <img className='profil-picture' src={accLogement[0].host.picture} alt="" />
            </div>
            <Star  rating={accLogement[0].rating} />
          </div>
        </div>
        <div className='collapse-container'>
              <Collapse className='market' collapseId={'description'} key={'description'} title={'Description'} description={accLogement[0].description} />  
              <CollapseEquipement  collapseId={'equipments'} key={'equipement'} title={'Equipement'} description={accLogement[0]} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Market