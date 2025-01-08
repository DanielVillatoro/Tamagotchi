import { SDK } from "@dojoengine/sdk";
import { Link } from 'react-router-dom';
import { Schema } from "../../dojo/bindings.ts";
import { useAccount } from "@starknet-react/core";
import { useBeast } from "../../hooks/useBeasts.tsx";
import { useSystemCalls } from "../../dojo/useSystemCalls.ts";
import Header from "../Header/index.tsx";
import './main.css';

function BeastsBag({ sdk }: { sdk: SDK<Schema> }) {
  const beast = useBeast(sdk);
  const { spawn } = useSystemCalls();
  const { account } = useAccount();

  return (
    <>
      <Header />
      <div className="beasts-bag">
        <div>
          <p className={'title text-center mb-3'}>
            You play, feed, sleep and more
            <span className='d-block'> Look at It, otherwise It'll die</span>
          </p>
          <div className="d-flex">
            {
              beast &&
              <Link to={`/play`} className="beasts">
                <p>{beast.player}</p>
                <p>{beast.speed}</p>
                <p>{beast.defense}</p>
              </Link>
            }
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

export default BeastsBag;
