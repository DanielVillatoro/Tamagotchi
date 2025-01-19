import { useEffect, useMemo, useState } from "react";
import { SDK } from "@dojoengine/sdk";
import { getEntityIdFromKeys } from "@dojoengine/utils";
// import { addAddressPadding } from "starknet";
import { Models, Schema } from "../dojo/bindings.ts";
import { useAccount } from "@starknet-react/core";
import useModel from "../dojo/useModel.tsx";
import { useDojoStore } from "../main";

export const useBeast = (sdk: SDK<Schema>) => {
  const { account } = useAccount();
  const state = useDojoStore((state) => state);

  const entityId = useMemo(
    () => account?.address ? getEntityIdFromKeys([BigInt(account.address)]) : null,
    [account?.address]
  );

  const beastData = useModel(entityId ?? "", Models.Beast);
  const [beast, setBeast] = useState(beastData);

  useEffect(() => {
    setBeast(beastData);
  }, [beastData]);

  useEffect(() => {
    if (!account) return;
    let unsubscribe: (() => void) | undefined;

    const subscribe = async () => {
      const subscription = await sdk.subscribeEntityQuery(
        {
          babybeasts: {
            Beast: {
              $: {
                where: {

                },
              },
            },
          },
        },
        (response) => {
          if (response.error) {
            console.error("Error setting up entity sync:", response.error);
          } else if (response.data && response.data[0].entityId !== "0x0") {
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
    if (!account) return;
    const fetchEntities = async () => {
      try {
        await sdk.getEntities(
          {
            babybeasts: {
              Beast: {
                $: {
                  where: {
                  },
                },
              },
            },
          },
          (resp) => {
            if (resp.error) {
              console.error("resp.error.message:", resp.error.message);
              return;
            }
            if (resp.data) {
              console.log("resp.data:", resp.data);
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

  return beast;
};
