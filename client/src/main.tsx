// React imports
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { MusicProvider } from "./context/contextMusic.tsx";

// Dojo imports
import { init } from "@dojoengine/sdk";
import { DojoSdkProvider } from "@dojoengine/sdk/react";
import type { SchemaType } from "./dojo/bindings.ts";
import { setupWorld } from "./dojo/contracts.gen.ts";
import { dojoConfig } from "./dojo/dojoConfig.ts";
import StarknetProvider from "./dojo/starknet-provider.tsx";

// PostHog imports
import { PostHogProvider } from 'posthog-js/react';
import { posthogInstance } from './utils/posthogConfig';

// import { messaging } from "./utils/firebase.tsx";
// import { getToken } from "firebase/messaging";
// import { usePlayer } from "./hooks/usePlayers.tsx";

// Import the layout component
import Main from "./components/Main/index.tsx";
import "./index.css";

// async function requestNotificationPermission() {
//   try {
//     const { player } = usePlayer();
//     const permission = await Notification.requestPermission();
//     if (permission === "granted") {
//       const token = await getToken(messaging, { vapidKey: "BDxvVGSyhGggzz7fxjb4pTrpBAiK6Aa4pIprLCu14ZvsD-EjexIFABznJpW0lXV5A57OMgqclcn8-SPgeilKS2g" });
//       console.log("Notification permission granted. FCM Token:", token);
//       console.log("Player Address:" )
//       //FIX
//       // store the token
//     } else {
//       console.log("Notification permission denied.");
//     }
//   } catch (error) {
//     console.error("Error requesting notification permission:", error);
//   }
// }



async function main() {
  const sdk = await init<SchemaType>({
    client: {
      toriiUrl: dojoConfig.toriiUrl,
      relayUrl: dojoConfig.relayUrl,
      worldAddress: dojoConfig.manifest.world.address,
    },
    domain: {
      name: "WORLD_NAME",
      version: "1.0",
      chainId: "KATANA",
      revision: "1",
    },
  });

  // await requestNotificationPermission();

  const rootElement = document.getElementById("root");
  if (rootElement) {
    ReactDOM.render(
      <StrictMode>
        <DojoSdkProvider
          sdk={sdk}
          dojoConfig={dojoConfig}
          clientFn={setupWorld}
        >
          <StarknetProvider>
              <MusicProvider>
                {posthogInstance.initialized && posthogInstance.client ? (
                  <PostHogProvider client={posthogInstance.client}>
                    <Main />
                  </PostHogProvider>
                ) : (
                  <Main />
                )}
              </MusicProvider>
          </StarknetProvider>
        </DojoSdkProvider>
      </StrictMode>,
      rootElement
    );
  }
}

main().catch((error) => {
  console.error("Hello: Falló la inicialización de la aplicación:", error);
});
