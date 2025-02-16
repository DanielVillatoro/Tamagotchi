import { useState } from "react";
import Joyride, { CallBackProps, STATUS } from "react-joyride";
import './main.css';

const TamagotchiJR = () => {
  const [run, setRun] = useState(true);

  const steps = [
    {
      target: ".navbar .logo",
      content: "Here you will come back to the Tamagotchi Screen",
    },
    {
      target: ".sound-button",
      content: "Enable and disable the sound",
    },
    {
      target: ".dex-icon",
      content: "Here is your Beasts Dex",
    },
    {
      target: ".bag-icon",
      content: "Here are your beasts",
    },
    {
      target: ".status",
      content: "Here are the stats of your baby beasts, It will decrease every 5 seconds",
    },
    {
      target: ".beast-interaction .actions-icon",
      content: "Here are the actions",
    },
    {
      target: ".beast-interaction .message-icon",
      content: "Here you can talk to your baby beasts!",
    },
    {
      target: ".beast-interaction .stats-icon",
      content: "Here the stats of your baby beasts",
    },
    {
      target: ".hatch-icon",
      content: "Here you can Hatch a new Egg",
    },
  ];

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status as "finished" | "skipped")) {
      setRun(false);
    }
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      callback={handleJoyrideCallback}
      continuous
      showProgress
      showSkipButton
      styles={{
        options: {
          zIndex: 10000,
        },
      }}
    />
  );
};

export default TamagotchiJR;
