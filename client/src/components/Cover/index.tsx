import { SDK } from "@dojoengine/sdk";
import { useAccount } from "@starknet-react/core";
import { Schema } from "../../dojo/bindings.ts";
import Bag from "../Bag/index.tsx";
import fight from '../../assets/img/banner.jpeg';
import Footer from "../Footer/index.tsx";


function Cover({ sdk }: { sdk: SDK<Schema> }) {

  const { account } = useAccount();

  return (
    <>
    {
      account ? <Bag sdk={sdk} /> : 
      <>
        <div className='cover'>
          <div className="mb-3">
            <img className="cover-pic" src={fight} alt="" />
          </div>
          <button className="connect-btn" onClick={() => (document.querySelector('.navbar-toggler') as HTMLElement)?.click()}>
            Connect and start Play
          </button>
          <Footer />
        </div>
      </>
    }
    </>
  )
}

export default Cover;
