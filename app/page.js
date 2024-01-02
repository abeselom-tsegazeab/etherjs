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
  const { data,yourBlockTsx } = useEtherScan();
  console.log(yourBlockTsx)

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
        {yourBlockTsx.map((e,i)=>(
          <div className={Style.oneBlock} key={i + 1}>
            <div className={Style.block}>
              <div className={Style.info}>
                  <div className={Style.bk}>
                    {i + 1}<p>BK</p>

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
