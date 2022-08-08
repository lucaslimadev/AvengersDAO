import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x984d0882BE3E36C6e183f4fe1Ba734d7eD89Fae7");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Avenger",
        description: "Esse NFT vai te dar acesso a AvengersDAO",
        image: readFileSync("scripts/assets/avengersNFT.jpg"),
      },
    ]);
    console.log("✅ Novo NFT criado com sucesso no !");
  } catch (error) {
    console.error("falha ao criar o novo NFT", error);
  }
})()