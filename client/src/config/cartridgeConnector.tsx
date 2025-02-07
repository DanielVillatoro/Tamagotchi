import { ControllerConnector}  from "@cartridge/connector";
import { SessionPolicies } from "@cartridge/controller";
import { Connector } from "@starknet-react/core";

const policies: SessionPolicies = {
  contracts: {
    ['0x67b0f2071e0cd5bdce91fe1ffdfbc3bdec009991bfde040cde9db0778c66ed5']: {
      methods: [
        {
          name: "spawn_player",
          entrypoint: "spawn_player"
        },
        {
          name: "set_current_beast",
          entrypoint: "set_current_beast"
        },
        {
          name: "add_initial_food",
          entrypoint: "add_initial_food"
        },
        {
          name: "spawn",
          entrypoint: "spawn"
        },
        {
          name: "decrease_stats",
          entrypoint: "decrease_stats"
        },
        {
          name: "feed",
          entrypoint: "feed"
        },
        {
          name: "sleep",
          entrypoint: "sleep"
        },
        {
          name: "awake",
          entrypoint: "awake"
        },
        {
          name: "play",
          entrypoint: "play"
        },
        {
          name: "clean",
          entrypoint: "clean"
        },
        {
          name: "revive",
          entrypoint: "revive"
        },
        {
          name: "tap",
          entrypoint: "tap"
        }
      ],
    },
  },
}

// Configuración básica del conector
const cartridgeConnector = new ControllerConnector({
  policies,
  rpc: 'https://api.cartridge.gg/x/aasss/katana'
}) as never as Connector;

export default cartridgeConnector;
