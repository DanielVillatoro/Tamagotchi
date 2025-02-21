import { ControllerConnector}  from "@cartridge/connector";
import { SessionPolicies } from "@cartridge/controller";
import { Connector } from "@starknet-react/core";

const policies: SessionPolicies = {
  contracts: {
    ['0x76c919037528de22722814b53b5ba81984995da0bbca2c092946bd82ef57b82']: {
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
          name: "decrease_status",
          entrypoint: "decrease_status"
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
          name: "pet",
          entrypoint: "pet"
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
          name: "init_tap_counter",
          entrypoint: "init_tap_counter"
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
  rpc: 'https://api.cartridge.gg/x/bbhackerhouse/katana'
}) as never as Connector;

export default cartridgeConnector;
