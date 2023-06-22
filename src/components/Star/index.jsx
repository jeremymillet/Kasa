import redStar from '../../asset/red-star.png'
import greyStar from '../../asset/grey-star.png'
import './Star.scss'


function Star(accLogement) {
    const etoileMax = 5
    const etoile = accLogement.rating
    const etoilegrise = etoileMax - accLogement.rating

     const etoilesRouges = Array.from({ length: etoile }, (_, index) => (
        <img key={index} src={redStar} alt="" />
     ));
     const etoilesGris = Array.from({ length: etoilegrise }, (_, index) => (
        <img  key={index} src={greyStar} alt="" /> 
    ));
    return (
        <div className='star-container'>
            {etoilesRouges}
            {etoilesGris}
        </div>
    )
}

export default Star