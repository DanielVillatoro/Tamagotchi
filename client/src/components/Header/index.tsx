import { Link } from 'react-router-dom';
import { useAccount } from "@starknet-react/core";
import ControllerConnectButton from '../CartridgeController/ControllerConnectButton';
import Music from '../Music';
import Chat from '../Chat';
import sheep from '../../assets/img/sheep.gif';
import monster from '../../assets/img/logo.jpeg';
import './main.css';

function Header() {

  const { account } = useAccount();

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
          <div className='d-flex justify-content-center'>
            { account && <Link className="connect-btn" to="/">Beasts Bag</Link> }
            <ControllerConnectButton />
          </div>
          <Chat />
        </div>
      </nav>
    </>
  )
}

export default Header;
