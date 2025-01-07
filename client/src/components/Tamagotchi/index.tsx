import { useEffect, useState } from "react";
import { Account } from "starknet";
import { useAccount } from "@starknet-react/core";
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { useDojo } from "../../dojo/useDojo.tsx";
import { Heart, Pizza, Coffee, Bath, Gamepad2, Sun, Swords, ShieldPlus, TestTubeDiagonal, CircleGauge, } from 'lucide-react';

import sleep from '../../img/sleep.gif';
import eat from '../../img/eat.gif';
import play from '../../img/play.gif';
import shower from '../../img/shower.gif';
import happy from '../../img/happy.gif';
import dead from '../../img/dead.gif';
import { Beast } from "../../dojo/bindings";

function Tamagotchi({ beast }: { beast: Beast }) {

  const {
    setup: { client },
  } = useDojo();

  const { account } = useAccount();

  // Animations
  const [currentImage, setCurrentImage] = useState(happy);
  const showAnimationWithoutTimer = (gifPath: string) => {
    setCurrentImage(gifPath);
  };
  const showAnimation = (gifPath: string) => {
    setCurrentImage(gifPath);
    setTimeout(() => {
      setCurrentImage(happy);
    }, 1000000);
  };
  const showDeathAnimation = () => {
    setCurrentImage(dead);
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      if (beast?.is_alive && account) {
        await client.actions.decreaseStats(account as Account);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [beast?.is_alive]);

  useEffect(() => {
    if (beast?.is_alive == false) {
      showDeathAnimation();
    }
  }, [beast?.is_alive]);

  return (
    <div className="tamaguchi">
      <>
        <Card>
          <CardContent>
            <div className="space-y-6">
              {/* Centered Tamagotchi Image */}
              <div className="scenario flex justify-center items-column">
                <h2 className="level">Lvl <span>{beast.level}</span></h2>
                <div className="stats">
                  <div className="item">
                    <div>
                      <Swords />
                      <span>{Math.round(beast.attack)}</span>
                    </div>
                    <p className="info">Attack</p>
                  </div>
                  <div className="item">
                    <div>
                      <ShieldPlus />
                      <span>{Math.round(beast.defense)}</span>
                    </div>
                    <p className="info">Defense</p>
                  </div>
                  <div className="item">
                    <div>
                      <CircleGauge />
                      <span>{Math.round(beast.speed)}</span>
                    </div>
                    <p className="info">Speed</p>
                  </div>
                  <div className="item">
                    <div>
                      <TestTubeDiagonal />
                      <span>{(beast.experience)}</span>
                    </div>
                    <p className="info">Experience</p>
                  </div>
                </div>
                <img src={currentImage} alt="Tamagotchi" className="w-40 h-40" />
              </div>
              <div className="d-flex justify-content-center">
                <div className="status">
                  <div className="item">
                    <div>
                      <Heart />
                      <span>{Math.round(beast.energy)}%</span>
                    </div>
                    <p className="info">Energy</p>
                  </div>
                  <div className="item">
                    <div>
                      <Coffee />
                      <span  >{Math.round(beast.hunger)}%</span>
                    </div>
                    <p className="info">Hunger</p>
                  </div>
                  <div className="item">
                    <div>
                      <Gamepad2 />
                      <span  >{Math.round(beast.happiness)}%</span>
                    </div>

                    <p className="info">Happiness</p>
                  </div>
                  <div className="item">
                    <div>
                      <Bath />
                      <span  >{Math.round(beast.hygiene)}%</span>
                    </div>

                    <p className="info">Hygiene</p>
                  </div>
                </div>
              </div>
              <div className="actions mb-0">
                <Button
                  onClick={async () => {
                    if (account) {
                      await client.actions.feed(account as Account);
                    }
                    if (beast.is_alive) showAnimation(eat);
                  }}
                  disabled={!beast.is_alive}
                  className="flex items-center button"
                >
                  <Pizza /> Feed
                </Button>
                <Button
                  onClick={async () => {
                    if (account) {
                      await client.actions.sleep(account as Account);
                    }
                    if (beast.is_alive) showAnimationWithoutTimer(sleep);
                  }}
                  disabled={!beast.is_alive}
                  className="flex items-center button"
                >
                  <Coffee /> Sleep
                </Button>
                <Button
                  onClick={async () => {
                    if (account) {
                      await client.actions.play(account as Account);
                    }
                    if (beast.is_alive) showAnimation(play);
                  }}
                  disabled={!beast.is_alive}
                  className="flex items-center button"
                >
                  <Gamepad2 /> Play
                </Button>
                <Button
                  onClick={async () => {
                    if (account) {
                      await client.actions.clean(account as Account);
                    }
                    if (beast.is_alive) showAnimation(shower);
                  }}
                  disabled={!beast.is_alive}
                  className="flex items-center  button"
                >
                  <Bath /> Clean
                </Button>
                <Button
                  onClick={async () => {
                    if (account) {
                      await client.actions.awake(account as Account);
                    }
                    if (beast.is_alive) setCurrentImage(happy);
                  }}
                  disabled={!beast.is_alive}
                  className="flex items-center button"
                >
                  <Sun /> Wake Up
                </Button>
                <Button
                  onClick={async () => {
                    if (account) {
                      await client.actions.revive(account as Account);
                    }
                    setCurrentImage(happy);
                  }}
                  disabled={beast.is_alive}
                  className="flex items-center button"
                >
                  <Sun /> Revive
                </Button>
              </div>
              <p className="info mt-3">You can revive your baby beast, but this one is gonna loose the experience earhed</p>
            </div>
          </CardContent>
        </Card>
      </>
    </div>
  );
}

export default Tamagotchi;
