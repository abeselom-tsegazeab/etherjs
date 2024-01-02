"use client";
import React, { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_API_KEY}`
);
export const Etherscan = React.createContext();

export const EtherProvider = ({ children }) => {
  const [data, setData] = useState("Etherscan Clone");
  const tenBlockWithDetails = [];
  const [yourBlockTsx, setYourBlockTsx] = useState(tenBlockWithDetails);
  const [currentBlock, setCurrentBlock] = useState([]);
  const [topTenBlock, setTopTenBlock] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [gasPrice, setGasPrice] = useState("");

  const accountDetails = async () => {
    try {
      const getCurrentBlock = await provider.getBlockNumber();
      setCurrentBlock(getCurrentBlock);

      // get single block transaction
      // getBlock gives the data in the current block
      const blockTransaction = await provider.getBlock(getCurrentBlock);
      setTransaction(blockTransaction.transactions);

      // top ten blocks
      const previosBlock = getCurrentBlock - 10;
      const listTenBlock = []

      for (let i = getCurrentBlock;i > previosBlock;i--){
        listTenBlock.push([i])
      }

      // get block details
      const getBlockDetails = listTenBlock.flat();
      setTopTenBlock(getBlockDetails);
      
      getBlockDetails.map(async (e)=>{
        const singleBlockData = await provider.getBlock(e);
        tenBlockWithDetails.push([singleBlockData])
      })
    } catch (error) {
      console.log("Something went wrong while fetching data", error);
    }
  };
  useEffect(() => {
    accountDetails();
  }, []);

  return (
    <Etherscan.Provider value={{ data }}>
      <div>{children}</div>
    </Etherscan.Provider>
  );
};

export function useEtherScan() {
  return useContext(Etherscan);
}
