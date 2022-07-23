import React from "react";
import { useState } from "react";

/// mints the NFT to the Music3 Contract Collection with the ,metdata and address  provided
export const MintNFT2 = ({ ipfsURI, userAddress }) => {
  const [response, SetResponse] = useState();
  const mintNFT = () => {
    fetch("https://api.nftport.xyz/v0/mints/customizable", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NFTPORT_API_KEY,
      },
      body: {
        chain: "polygon",
        contract_address: "0xDBd95D79d3A019Cd16D02B6a386aDa8C717C6A09",
        metadata_uri: ipfsURI,
        mint_to_address: userAddress,
      },
    })
      .then((response) => {
        console.log(response);
        SetResponse(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  mintNFT();
  return <div>MintNFT2</div>;
};