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

export default function Home() {
  const router = useRouter();
  const { data, yourBlockTsx } = useEtherScan();
  const [userAccount, setUserAccount] = useState("");

  // convert ether
  const convertIntoEth = (amount)=>{
    const ETH = ethers.utils.formatUnits(amount,'ether');
    return ETH;
  }

  // input address
  const accountAddress = (e)=>{
    e.preventDefault()
    let address = document.getElementById("accountAddress").value.trim()
    setUserAccount(address)
    router.push(`/account?${address}`)
    address = '';
  }

  return (
    <main className="">
      <NavBar />
      <main className="w-[90%]  m-auto p-5">
        <div className={`${Style.header}`}>
          <form className={Style.accountAddress}>
            <input
              type="text"
              placeholder="Ether Account address"
              id="accountAddress"
            />
            <Link href={{ pathname: "/account", query: userAccount }} onClick={e=>accountAddress(e)}>
              <SiMinutemailer />
            </Link>
          </form>
        </div>

        {/* main section */}
        <div className={Style.container}>
          <div className={Style.container_box}>
            <h3>Latest Blocks</h3>
            <div className={Style.container_block}>
              {yourBlockTsx.map((e, i) => (
                <div className={Style.oneBlock} key={i}>
                  <div className={Style.block}>
                    <div className={Style.info}>
                      <div className={Style.bk}>
                        <p>BK</p>
                        <Link href={{ pathname: "/block", query: e.number }}>
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
                              href={{ pathname: "/account/", query: e.miner }}
                            >
                              {e[0]?.miner.slice(0, 35)}...
                            </Link>
                          </span>
                        </p>
                        <span>
                          <Link
                            href={{ pathname: "/account/", query: e.number }}
                          >
                            {e[0].transactions.length}
                          </Link>
                          &nbsp;TSX in 3 Sec
                        </span>
                      </div>
                    <div className={Style.reward}>
                      <p>{convertIntoEth(e.baseeFeePerGas)} <span>ETH</span></p>
                      <Image src={logo} className={Style.eth} alt='Ether Logo' width={10} height={10}/>
                    </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </main>
  );
}
