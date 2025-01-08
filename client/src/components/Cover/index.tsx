import { SDK } from "@dojoengine/sdk";
import { useAccount } from "@starknet-react/core";
import { Schema } from "../../dojo/bindings.ts";
import Header from "../Header/index.tsx";
import BeastsBag from "../BeastsBag/index.tsx";
import fight from '../../img/banner.jpeg';

function Cover({ sdk }: { sdk: SDK<Schema> }) {

  const { account } = useAccount();

  return (
    <>
    {
      account ? <BeastsBag sdk={sdk} /> : 
      <>
        <Header />
        <div className='cover'>
          <p className={'title text-center mb-3'}>
            You play, feed, sleep and more
            <span className='d-block'> Look at It, otherwise It'll die</span>
          </p>
          <div className="new yellow-border mb-3">
            <img src={fight} alt="" />
          </div>
        </div>
      </>
    }
    </>
  )
}

export default Cover;
