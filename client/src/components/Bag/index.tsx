import { SDK } from "@dojoengine/sdk";
import { Link } from 'react-router-dom';
import { Schema } from "../../dojo/bindings.ts";
import { useBeast } from "../../hooks/useBeasts.tsx";
import { Swords, ShieldPlus, TestTubeDiagonal, CircleGauge, } from 'lucide-react';
import './main.css';

import happy from '../../assets/img/happy.gif';
// import beastie from "../../data/beast.tsx";

function Bag({ sdk }: { sdk: SDK<Schema> }) {

  let beast = useBeast(sdk);

  // const beast = beastie;

  return (
    <>
      <div className="bag">
        <div className="eggs">
          <p className={'title text-center mb-4'}>
            Collect them all!
            <span className='d-block'>There are many species</span>
          </p>
          <div>
            {
              beast &&
              <Link to={`/play`} className="beast">
                <div className="d-flex align-items-end">
                  <img src={happy} alt="beast" />
                  <h4 className="d-flex">
                    <span>{beast.level}</span> Lvl
                  </h4>
                </div>
                <div className="data">
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
      </div>
    </>
  )
}

export default Bag;
