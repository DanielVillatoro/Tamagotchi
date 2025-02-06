import { useEffect, useMemo, useState } from "react";
import { SDK } from "@dojoengine/sdk";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { addAddressPadding } from "starknet";
import { Models, SchemaType } from "../dojo/bindings.ts";
import { useAccount } from "@starknet-react/core";
import useModel from "../dojo/useModel.tsx";
import { useDojoStore } from "../main.tsx";

export const useFood = (sdk: SDK<SchemaType>) => {
  const { account } = useAccount();
  const state = useDojoStore((state) => state);

  const entityId = useMemo(
    () => account?.address ? getEntityIdFromKeys([BigInt(account.address)]) : null,
    [account?.address]
  );

  const foodData = useModel(entityId ?? "", Models.Food);
  const [food, setFood] = useState(foodData);

  const [foods, setFoods] = useState<any>([]);

  useEffect(() => {
    setFood(foodData);
  }, [foodData]);

  useEffect(() => {
    if (!account) return;
    let unsubscribe: (() => void) | undefined;

    const subscribe = async () => {
      const subscription = await sdk.subscribeEntityQuery(
        {
          babybeasts: {
            Food: {
              $: {
                where: {
                  player: {
                    $is: addAddressPadding(account.address),
                  },
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
              Food: {
                $: {
                  where: {
                    // food: {
                    //   $eq: addAddressPadding(account.address),
                    // },
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
              const foodsData = resp.data.map((entity) => entity.models.babybeasts.Food);
              setFoods(foodsData);
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

  return {
    food,
    foods,
  };
};
