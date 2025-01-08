import { SDK, createDojoStore } from "@dojoengine/sdk";
import { Schema } from "./dojo/bindings.ts";
import Tamagotchi from "./components/Tamagotchi/index.tsx";
import { useBeast } from "./hooks/useBeasts.tsx";

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
