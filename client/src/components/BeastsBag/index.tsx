import { SDK } from "@dojoengine/sdk";
import { Link } from 'react-router-dom';
import { Schema } from "../../dojo/bindings.ts";
import { useAccount } from "@starknet-react/core";
import { useBeast } from "../../hooks/useBeasts.tsx";
import { useSystemCalls } from "../../dojo/useSystemCalls.ts";
import { Swords, ShieldPlus, TestTubeDiagonal, CircleGauge, } from 'lucide-react';
import Header from "../Header/index.tsx";
import './main.css';

import happy from '../../assets/img/happy.gif';

function BeastsBag({ sdk }: { sdk: SDK<Schema> }) {
  const beast = useBeast(sdk);
  const { spawn } = useSystemCalls();
  const { account } = useAccount();

  return (
    <>
      <Header />
      <div className="beasts-bag">
        <div className="eggs">
          <p className={'title text-center mb-4'}>
            You play, feed, sleep and more
            <span className='d-block'> Look at It, otherwise It'll die</span>
          </p>
          <div className="d-flex justify-content-start">
            {
              beast &&
              <Link to={`/play`} className="beast">
                <div className="d-flex justify-content-between align-items-end">
                  <img src={happy} alt="beast" />
                  <h4>
                    Lvl <span>{beast.level}</span>
                  </h4>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="item">
                    <div>
                      <Swords />
                      <span>{Math.round(beast.attack)}</span>
                    </div>
                  </div>
                  <div className="item">
                    <div>
                      <ShieldPlus />
                      <span>{Math.round(beast.defense)}</span>
                    </div>
                  </div>
                  <div className="item">
                    <div>
                      <CircleGauge />
                      <span>{Math.round(beast.speed)}</span>
                    </div>
                  </div>
                  <div className="item">
                    <div>
                      <TestTubeDiagonal />
                      <span>{(beast.experience)}</span>
                    </div>
                  </div>
                </div>
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
