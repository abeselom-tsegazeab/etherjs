"use client";
import { ethers } from "ethers";
import React, {  useEffect } from "react";
export default function Home() {
  const address = "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5";
  const etherjs = async () => {
    const provider = new ethers.providers.EtherscanProvider();

    const balance = await provider.getBalance(address);
    console.log(balance);

    console.log(provider);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Hi there</div>
    </main>
  );
}
