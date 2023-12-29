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
    const number = checkFunction.transactions
    setTransaction(number)
    console.log(number);
  };
 useEffect(()=>{
  etherjs()
 },[])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Hi there</div>
      {transaction.map((tsx,index)=>(
        <div key={index}>
          <h6 className="text-lg leading-10">{tsx}</h6>
        </div>
      ))}
    </main>
  );
}
