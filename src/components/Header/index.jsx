import Logo from '../../asset/logo.png'
import { Link } from 'react-router-dom'
import './Header.scss'



function Header() {
    
    
    return (
        <header className="header-container">
            <img className='header-img' src={Logo} alt="Logo du site kasa" />
            <nav>
                <Link  className={'nav-item'} to={'/'}>Accueil</Link>
                <Link  className={'nav-item'} to={'/About'}>A Propos</Link>
            </nav>
        </header>
    )
}

export default Header