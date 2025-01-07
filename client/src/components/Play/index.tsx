import { useAccount } from "@starknet-react/core";
import { useSystemCalls } from "../../dojo/useSystemCalls.ts";
import fight from '../../img/banner.jpeg';
import './main.css';

function Play() {
  const { spawn } = useSystemCalls();

  const { account } = useAccount();

  return (
    <>
      <div className='cover'>
        <div className="section-tab yellow-border">
          <p className={'title text-center mb-3'}>
            You play, feed, sleep and more
            <span className='d-block'> Look at It, otherwise It'll die</span>
          </p>
          <div className="new yellow-border mb-3">
            <img src={fight} alt="" />
          </div>
        </div>
        <button
          disabled={account ? false : true}
          className="button"
          onClick={async () => {
            await spawn();
            location.reload();
          }}>Spawn your BabyBeast
        </button>
      </div>
    </>
  )
}

export default Play;
