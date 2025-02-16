import { SDK } from "@dojoengine/sdk";
import { SchemaType } from "../../dojo/bindings";
import { useAccount } from "@starknet-react/core";
import { usePlayer } from "../../hooks/usePlayers";
import Tamagotchi from "../Tamagotchi";
import SpawnBeast from "../SpawnBeast";
import NewCover from "../NewCover";

function Main({ sdk }: { sdk: SDK<SchemaType> }) {
  const { account } = useAccount();
  const { player } = usePlayer(sdk);
  return account && player?.current_beast_id ? <Tamagotchi sdk={sdk} /> : account ? <SpawnBeast sdk={sdk} /> : <NewCover />;
}

export default Main;
