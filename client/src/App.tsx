import { useEffect, useMemo, useState } from "react";
import { SDK, createDojoStore } from "@dojoengine/sdk";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { addAddressPadding } from "starknet";
import { Models, Schema } from "./dojo/bindings.ts";
import { useAccount } from "@starknet-react/core";
import useModel from "./dojo/useModel.tsx";
import Header from "./components/Header/index.tsx";
import Play from "./components/Play/index.tsx";
import Tamagotchi from "./components/Tamagotchi/index.tsx";

export const useDojoStore = createDojoStore<Schema>();

function App({ sdk }: { sdk: SDK<Schema> }) {
  const { account } = useAccount();

  const state = useDojoStore((state) => state);

  const entityId = useMemo(
    () => account?.address ? getEntityIdFromKeys([BigInt(account.address)]) : null,
    [account?.address]
  );

  const beastData = useModel(entityId ?? "", Models.Beast);
  const [beast, setBeast] = useState(beastData);

  // Trigger build
  useEffect(() => {
    setBeast(beastData);
  }, [beastData]);

  useEffect(() => {
    if (!account) return
    let unsubscribe: (() => void) | undefined;

    const subscribe = async () => {

      const subscription = await sdk.subscribeEntityQuery(
        {
          dojo_starter: {
            Beast: {
              $: {
                where: {
                  player: {
                    $is: addAddressPadding(
                      account.address
                    ),
                  },
                },
              },
            },
          },
        },
        (response) => {
          if (response.error) {
            console.error(
              "Error setting up entity sync:",
              response.error
            );
          } else if (
            response.data &&
            response.data[0].entityId !== "0x0"
          ) {
            state.updateEntity(response.data[0]);
          }
        },
        { logging: true }
      );

      unsubscribe = () => subscription.cancel();
    };

    subscribe();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [sdk, account]);

  useEffect(() => {
    if (!account) return
    const fetchEntities = async () => {
      try {
        await sdk.getEntities(
          {
            dojo_starter: {
              Beast: {
                $: {
                  where: {
                    player: {
                      $eq: addAddressPadding(
                        account.address
                      ),
                    },
                  },
                },
              },
            },
          },
          (resp) => {
            if (resp.error) {
              console.error(
                "resp.error.message:",
                resp.error.message
              );
              return;
            }
            if (resp.data) {
              state.setEntities(resp.data);
            }
          }
        );
      } catch (error) {
        console.error("Error querying entities:", error);
      }
    };

    fetchEntities();
  }, [sdk, account]);

  return (
    <>
      <Header />
      {
        beast 
          ? <Tamagotchi beast={beast} /> 
          : <Play />
      }
    </>
  );
}

export default App;
