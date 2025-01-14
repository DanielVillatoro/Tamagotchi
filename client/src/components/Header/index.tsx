import Music from '../Music/index.tsx';
import ControllerConnectButton from '../CartridgeController/ControllerConnectButton';
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
        <ControllerConnectButton />
        <Music />
      </nav>
    </>
  )
}

export default Header;
