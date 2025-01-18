import { useAccount } from "@starknet-react/core";
import { useSystemCalls } from "../../dojo/useSystemCalls.ts";
import initials, { Initial } from "../../data/initials";
import './main.css';

function SpawnBeast() {
  const { spawn } = useSystemCalls();
  const { account } = useAccount();

  return (
    <div className="spawn-beast">
      <div className="initial-beasts">
        {initials.map((beast: Initial, i) => {
          return (
            <div key={i} className="initial-beast">
              <img src={beast.idlePicture} alt="beast" />
              <div className="initial-info">
                <h4>
                  {beast.name}
                </h4>
                <p>
                  {beast.description}
                </p>
                <button
                  disabled={account ? false : true}
                  className="button"
                  onClick={async () => {
                    await spawn();
                    location.reload();
                  }}>Spawn
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default SpawnBeast;
