import { Link } from "react-router-dom";
import { useAccount } from "@starknet-react/core";
import Music from '../Music';
import sheep from '../../assets/img/sheep.svg';
import message from '../../assets/img/message.svg';
import monster from '../../assets/img/logo.svg';
import './main.css';

function Header() {

  const account = useAccount();

  return (
    <>
      <nav className="navbar">
        <Link to={'/'} className='logo'>
          <img src={monster} alt="Logo" />
          <h2>Baby <span>Beast</span></h2>
        </Link>
        <div className="side-menu">
          <Music />
          {
            account ?
              <>
                <Link to={'/chat'}>
                  <img src={message} className='sheep' alt="Sheep" />
                </Link>
                <Link to={'/bag'}>
                  <img src={sheep} className='sheep' alt="Sheep" />
                </Link>
              </> : <></>
          }
        </div>
      </nav>
    </>
  )
}

export default Header;
