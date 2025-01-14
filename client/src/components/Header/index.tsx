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
        <img src={sheep} className='sheep' alt="Sheep" />
      </nav>
    </>
  )
}

export default Header;
