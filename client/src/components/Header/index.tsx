import sheep from '../../assets/img/sheep.gif';
import monster from '../../assets/img/logo.jpeg';
import './main.css';
import Music from '../Music';
import ControllerConnectButton from '../CartridgeController/ControllerConnectButton';

function Header() {
  return (
    <>
      <nav className="navbar">
        <div className='logo'>
          <img src={monster} alt="Logo" />
          <h2>Baby <span>Beast</span></h2>
        </div>
        <div>
          <Music />
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
            <img src={sheep} className='sheep' alt="Sheep" />
          </button>
        </div>

        <div className="collapse navbar-collapse menu" id="menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <ControllerConnectButton />
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header;
