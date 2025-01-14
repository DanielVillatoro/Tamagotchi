import ControllerConnector from "@cartridge/connector";
import { Policy } from "@cartridge/controller";
import { Connector } from "@starknet-react/core";

const policies: Policy[] = [
  {
    target: '0x7d4be2fe2654a38088a333a0e5ba20187c686c1729dfde7ae9f4ec45c7ae132',
    method: "spawn",
  },
  {
    target: '0x7d4be2fe2654a38088a333a0e5ba20187c686c1729dfde7ae9f4ec45c7ae132',
    method: "decrease_stats",
  },
  {
    target: '0x7d4be2fe2654a38088a333a0e5ba20187c686c1729dfde7ae9f4ec45c7ae132',
    method: "feed",
  },
  {
    target: '0x7d4be2fe2654a38088a333a0e5ba20187c686c1729dfde7ae9f4ec45c7ae132',
    method: "sleep",
  },
  {
    target: '0x7d4be2fe2654a38088a333a0e5ba20187c686c1729dfde7ae9f4ec45c7ae132',
    method: "awake",
  },
  {
    target: '0x7d4be2fe2654a38088a333a0e5ba20187c686c1729dfde7ae9f4ec45c7ae132',
    method: "play",
  },
  {
    target: '0x7d4be2fe2654a38088a333a0e5ba20187c686c1729dfde7ae9f4ec45c7ae132',
    method: "clean",
  },
  {
    target: '0x7d4be2fe2654a38088a333a0e5ba20187c686c1729dfde7ae9f4ec45c7ae132',
    method: "revive",
  },
]

// Configuración básica del conector
const cartridgeConnector = new ControllerConnector({
  policies,
  rpc: "https://api.cartridge.gg/x/byby/katana",
}) as never as Connector;

export default cartridgeConnector;
