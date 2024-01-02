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
  return (
    <main className="">
      <NavBar />
      <div className={Style.header}>
        <form className={Style.accountAddress}>
          <input
            type="text"
            placeholder="Ether Account address"
            id="accountAddress"
          />
          <Link href={{ pathname: "/account", query: userAccount }}>
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
                            {e[0]?.miner.slice(0,35)}...
                          </Link>
                        </span>
                      </p>
                      <span>
                        <Link href={{pathname:'/account/',query:e.number}}>
                          {/* {e[0].transaction.length} */}
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
