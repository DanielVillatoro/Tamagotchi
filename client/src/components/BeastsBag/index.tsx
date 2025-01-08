import { SDK } from "@dojoengine/sdk";
import { Schema } from "../../dojo/bindings.ts";
import { useBeast } from "../../hooks/useBeasts.tsx";
import Header from "../Header/index.tsx";

function BeastsBag({ sdk }: { sdk: SDK<Schema> }) {
  const beast = useBeast(sdk);
  
  return (
    <>
       <Header />
        <div className="beasts-bag">
          <p className={'title text-center mb-3'}>
            You play, feed, sleep and more
            <span className='d-block'> Look at It, otherwise It'll die</span>
          </p>
          <div className="beasts">
            <p>{beast?.player}</p>
          </div>
        </div>
    </>
  )
}

export default BeastsBag;
