import '../../styles/Card.scss';

function Card({ cover, title,description }) { 
      return (
        <div className='card'>
            <img className='card-img'src={cover} alt={description} />
            <p className='card-text'>{title}</p>
       </div> 
   )
}

export default Card