import Header from  '../../components/Header';
import './Error.scss';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';


function Error() {
    return (
        <div>
            <Header />
            <div className='page'>
                <main className='main'>
                    <h1 className='error-title'>404</h1>
                    <h2 className='error-subtitle'>Oups! La page que vous demandez n'existe pas.</h2>
                    <Link className="error-link" to='/'>Retourner sur la page d'acceuil</Link>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Error;