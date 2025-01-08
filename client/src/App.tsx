import { SDK, createDojoStore } from "@dojoengine/sdk";
import { Schema } from "./dojo/bindings.ts";
import { useBeast } from "./hooks/useBeasts.tsx";
import Tamagotchi from "./components/Tamagotchi/index.tsx";

export const useDojoStore = createDojoStore<Schema>();

function App({ sdk }: { sdk: SDK<Schema> }) {
  const beast = useBeast(sdk);

  return (
    <>
      { beast && <Tamagotchi beast={beast} /> }
    </>
  );
}

export default App;
