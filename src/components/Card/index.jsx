import './Card.scss';
import { Link } from 'react-router-dom';

function Card({ cover, title, description, id}) { 
      return (
        <Link to={id} className='card'>
            <div className='card-overlay'></div>
            <img className='card-img'src={cover} alt={description} />
            <p className='card-text'>{title}</p>
       </Link> 
   )
}

export default Card