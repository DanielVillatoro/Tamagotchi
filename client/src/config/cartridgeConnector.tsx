import { ControllerConnector}  from "@cartridge/connector";
import { SessionPolicies } from "@cartridge/controller";
import { Connector } from "@starknet-react/core";

const policies: SessionPolicies = {
  contracts: {
    ['0x2774b0e065dc5ca9851cac016b8b75ab33bdbc2c77c11bad9766c5da99b227d']: {
      methods: [
        {
          name: "add_initial_food",
          entrypoint: "add_initial_food"
        },
        {
          name: "awake",
          entrypoint: "awake"
        },
        {
          name: "clean",
          entrypoint: "clean"
        },
        {
          name: "feed",
          entrypoint: "feed"
        },
        {
          name: "get_beast_age",
          entrypoint: "get_beast_age"
        },
        {
          name: "get_timestamp_based_status",
          entrypoint: "get_timestamp_based_status"
        },
        {
          name: "init_tap_counter",
          entrypoint: "init_tap_counter"
        },
        {
          name: "pet",
          entrypoint: "pet"
        },
        {
          name: "play",
          entrypoint: "play"
        },
        {
          name: "revive",
          entrypoint: "revive"
        },
        {
          name: "set_current_beast",
          entrypoint: "set_current_beast"
        },
        {
          name: "sleep",
          entrypoint: "sleep"
        },
        {
          name: "spawn_beast",
          entrypoint: "spawn_beast"
        },
        {
          name: "tap",
          entrypoint: "tap"
        },
        {
          name: "update_beast_status",
          entrypoint: "update_beast_status"
        },
        {
          name: "spawn_player",
          entrypoint: "spawn_player"
        }
      ],
    },
  },
}

// Configuración básica del conector
const cartridgeConnector = new ControllerConnector({
  policies,
  rpc: 'https://api.cartridge.gg/x/ttttt/katana'
}) as never as Connector;

export default cartridgeConnector;
