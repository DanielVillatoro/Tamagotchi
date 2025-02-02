import { useAccount } from "@starknet-react/core";
import { useSystemCalls } from "../../dojo/useSystemCalls.ts";
import Egg from "../../assets/img/egg.gif";
import './main.css';
import Hints from "../Hints/index.tsx";

function SpawnBeast() {
  const { spawn } = useSystemCalls();
  const { account } = useAccount();

  return (
    <div className="spawn-beast">
      <p className={'title'}>
        Collect them all!
        <span className='d-block'>There are many species</span>
      </p>
      <div className="initial-beast">
        <img src={Egg} alt="beast" />
        <div className="initial-info">
          <h4>
            This is a random beast
          </h4>
          <p>
            Hatch your own Babybeasts and take care of it! Collect them all!
          </p>
        </div>
        <button
          disabled={account ? false : true}
          className="button"
          onClick={async () => {
            await spawn(1);
          }}>Spawn
        </button>
        <Hints />
      </div>
    </div>
  );
}

export default SpawnBeast;
