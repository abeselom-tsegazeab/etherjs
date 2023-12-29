"use client";
import { ethers } from "ethers";
import React, {  useEffect, useLayoutEffect, useState } from "react";
export default function Home() {
  const address = "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5";
  const [transaction,setTransaction] = useState([]);
  const etherjs = async () => {
    const provider = new ethers.providers.EtherscanProvider();

    const balance = await provider.getBalance(address);
    const showBalance =await ethers.utils.formatEther(balance)
    const checkFunction = await provider.getBlock(18893205)
    const code = await provider.getBlockWithTransactions(18893205)
    const contracts = await provider.getCode(18893205)
    const con = await provider.blockNumber()
    const number = checkFunction.transactions
    setTransaction(contracts)
    console.log(con);
  };
 useEffect(()=>{
  etherjs()
 },[])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Hi there</div>
      {transaction.map((tsx,index)=>(
        <div key={index}>
          <h6 className="text-lg leading-10 text-green-400 overflow-clip">{tsx}</h6>
          <h5>{contracts}</h5>

        </div>
      ))}
    </main>
  );
}
