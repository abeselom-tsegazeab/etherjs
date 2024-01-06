"use client";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import React, { useState } from "react";
import { ethers } from "ethers";
import Link from "next/link";
import { SiMinutemailer } from "react-icons/si";
import { useEtherScan } from "@/context/Ether.js";

import Style from "../styles/Home.module.css";
import logo from "../public/assets/ether.png";
import { useRouter } from "next/navigation";
import Image from "next/image.js";
import {ether} from '../public/assets/ethereum.png'
import { FaEthereum } from "react-icons/fa";

export default function Home() {
  const router = useRouter();
  const { data, yourBlockTsx, transaction } = useEtherScan();
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
    setUserAccount(address);
    router.push(`/account?${address}`);
    address = "";
  };

 
  return (
    <main className="">
      <main className="w-[90%]  m-auto p-5">
        <div className={`${Style.header}`}>
          <form className={Style.accountAddress}>
            <input
              type="text"
              placeholder="Please Enter Your Ether Account address"
              id="accountAddress"
              className="text-white placeholder:text-white"
            />
            <Link
              href={{ pathname: "/account", query: userAccount }}
              onClick={(e) => accountAddress(e)}
            >
              <SiMinutemailer />
            </Link>
          </form>
        </div>

        {/* main section */}
        <div className={`${Style.container} !gird !md:grid-cols-2 !gird-cols-1`}>
          <div className={Style.container_box}>
            <h3>Latest Blocks</h3>
            <div className={`${Style.container_block} `}>
              {yourBlockTsx.map((e, i) => (
                <div className={`${Style.oneBlock} my-6 border border-[rgba(4,189,228,1)] rounded-[10px] p-3 hover:shadow-lg drop-shadow-xl`} key={i}>
                  <div className={`${Style.block} w-full`}>
                    <div className={`${Style.info} flex w-full items-center justify-between mb-1`}>
                      <div className={`${Style.bk} flex`}>
                          <p className="w-full">BK No:</p>
                          <Link href={{ pathname: "/block", query: e[0].number }}>
                            {e[0].number}
                          </Link>
                      </div>
                      <p>{e[0].timestamp}</p>
                    </div>
                    <div>
                      <div className={Style.miner}>
                        <p>
                          <span>
                            Miner: &nbsp;&nbsp;{" "}
                            <Link
                              href={{ pathname: `/account/${e[0].miner}` }}
                            >
                              {e[0]?.miner.slice(0, 35)}...
                            </Link>
                          </span>
                        </p>
                        <span>
                          <Link
                            href={{ pathname: "/account/", query: e.number }}
                          >TSX:&nbsp;&nbsp;
                            {e[0].transactions.length}
                          </Link>
                          &nbsp;
                           in 3 Sec
                        </span>
                      </div>
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
              ))}
            </div>
          </div>
          {/* Transactions */}
          <div className={`${Style.container_box} `}>
            <h3>Latest Transaction</h3>
            <div className={`${Style.container_block} h-[1295px]  overflow-auto`}>
              {transaction.map((e, i) => (
                <div className={`${Style.oneBlock}  my-6 border border-[rgba(4,189,228,1)] rounded-[10px] p-3 hover:shadow-lg drop-shadow-xl`} key={i}>
                  <div className={Style.info}>
                    <div>
                      <p className={Style.bx}>TNX</p>
                    </div>
                    <Link href={{ pathname: "/transaction", query: e }}>
                      Hash: &nbsp;&nbsp;{e.slice(0, 55)}...
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
