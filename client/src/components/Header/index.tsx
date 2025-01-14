import { Link } from 'react-router-dom';
import sheep from '../../assets/img/sheep.gif';
import monster from '../../assets/img/logo.jpeg';
import './main.css';

function Header() {
  return (
    <>
      <nav className="navbar">
        <div className='logo'>
          <a href="/"><img src={monster} alt="Logo" /></a>
          <h2>Baby <span>Beast</span></h2>
        </div>
        <Link to={window.location.pathname === '/menu' ? -1 : '/menu'}>
          <img src={sheep} className='sheep' alt="Sheep" />
        </Link>
      </nav>
    </>
  )
}

export default Header;
