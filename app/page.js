"use client";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import React, { useState } from "react";
import { ethers } from "ethers";
import Link from "next/link";
import { SiMinutemailer } from "react-icons/si";
import { useEtherScan } from "@/context/Ether.js";

import Style from "../styles/Home.module.css";
import { useRouter } from "next/navigation";
import { FaEthereum } from "react-icons/fa";

export default function Home() {
  const router = useRouter();
  const {  yourBlockTsx, transaction } = useEtherScan();
  const [userAccount, setUserAccount] = useState("");

  // convert ether
  const convertIntoEth = (amount) => {
    const ETH = ethers.utils.formatUnits(amount, "ether");
    return ETH;
  };
  // input address
  const accountAddress = (e) => {
    e.preventDefault();
    let address = document.getElementById("accountAddress").value.trim();
    // setUserAccount(address);
    router.push(`/account/${address}`);
    address = "";
  };
  function convertTimestampToDate(timestamp) {
    // Assuming the timestamp is in seconds
    const dateObject = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const formattedDate = dateObject.toUTCString();
    return formattedDate;
}

 
  return (
    <main className="">
      <main className="w-[100%]  m-auto ">
        <div className={`${Style.header}`}>
          <form className={Style.accountAddress}>
            <input
              type="text"
              placeholder="Please Enter Your Ether Account address"
              id="accountAddress"
              className="text-white placeholder:text-white"
              onChange={()=>setUserAccount(e.target.value)}
            />
            <Link
              href={{ pathname: `/account/${userAccount}` }}
              onClick={(e) => accountAddress(e)}
            >
              <SiMinutemailer size={25}/>
            </Link>
          </form>
        </div>

        {/* main section */}
        <div className={`${Style.container}  !gird !md:grid-cols-2 !gird-cols-1`}>
          <div className={Style.container_box}>
            <h3>Latest Blocks</h3>
            <div className={`${Style.container_block} `}>
              {yourBlockTsx.map((e, i) => (
                <div className={`${Style.oneBlock} my-6 border border-[rgba(4,189,228,1)] rounded-[10px] p-3 hover:shadow-lg drop-shadow-xl`} key={i}>
                  <div className={`${Style.block} w-full`}>
                    <div className={`${Style.info} flex w-full items-center md:justify-between mb-1 gap-4`}>
                      <div className={`${Style.bk} flex`}>
                          <p className="w-full">BK No:</p>
                          <Link href={{ pathname: `/block/${e[0].number}` }}>
                            {e[0].number}
                          </Link>
                      </div>
                      <p>{convertTimestampToDate(e[0].timestamp)}</p>
                    </div>
                    <div>
                      <div className={`${Style.miner} `}>
                        <p>
                          <span>
                            Miner: &nbsp;&nbsp;{" "}
                            <Link
                              href={{ pathname: `/account/${e[0]?.miner}` }}
                            >
                              {e[0]?.miner.slice(0, 35)}...
                            </Link>
                          </span>
                        </p>
                        <span>
                         Transactions:&nbsp;&nbsp;
                            {e[0].transactions.length}
                          &nbsp;
                           
                        </span>
                      <div className={`${Style.reward} w-fit flex`}>
                        <p>
                          Reward:&nbsp;&nbsp;
                          {convertIntoEth(e[0].baseFeePerGas._hex)}{" "}
                          <span>ETH</span>
                        </p>
                        <FaEthereum className="text-xl hover:text-[#fff]"/>

                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Transactions */}
          <div className={`${Style.container_box} `}>
            <h3>Latest Transaction</h3>
            <div className={`${Style.container_block} h-[1500px]  overflow-auto`}>
              {transaction.map((e, i) => (
                <div className={`${Style.oneBlock}  my-6 border border-[rgba(4,189,228,1)] rounded-[10px] p-3 hover:shadow-lg drop-shadow-xl`} key={i}>
                  <div className={Style.info}>
                    <div>
                      <p className={Style.bx}>Transaction</p>
                    </div>
                    <Link href={{ pathname: `/transaction/${e}` }} >
                      Hash: &nbsp;{e.slice(0, 55)}...
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
