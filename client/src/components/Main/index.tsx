import { useEffect, useState } from "react";
import { useAccount } from "@starknet-react/core";
// import { usePlayer } from "../../hooks/usePlayers";
import Tamagotchi from "../Tamagotchi";
import SpawnBeast from "../SpawnBeast";
import NewCover from "../NewCover";


function Main() {
  const { account } = useAccount();
  // const { player } = usePlayer();
  console.info('Roloooo', account);
  // console.info('Roloooo', player);
  const [view, setView] = useState<any>('');
  useEffect(() => {
    setView(account ? <Tamagotchi /> : account ? <SpawnBeast /> : <NewCover />);
  }, [account])
  
  return view;
}

export default Main;
