import { SDK } from "@dojoengine/sdk";
import { useAccount } from "@starknet-react/core";
import { Schema } from "../../dojo/bindings.ts";
import Header from "../Header/index.tsx";
import Bag from "../Bag/index.tsx";
import ControllerConnectButton from '../CartridgeController/ControllerConnectButton';

function Menu({ sdk }: { sdk: SDK<Schema> }) {

  const { account } = useAccount();

  return (
    <>
    {
      account ? <Bag sdk={sdk} /> : 
      <>
        <Header />
        <div className='cover'>
          <ControllerConnectButton />
        </div>
      </>
    }
    </>
  )
}

export default Menu;
