"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import logo from "../public/assets/ether.png";

const NavBar = () => {
  const [userAccount, setUserAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [count, setCount] = useState("");
  const [openModel, setOpenModel] = useState(true);
  const [price, setPrice] = useState([]);
  const [etherSupply, setEtherSupply] = useState([]);
  const [updatedPriceDate, setUpdatedPriceDate] = useState("");

  /* Get ether price update */

  const getEtherPrice = async () => {
    try {
      const API_ETHER_KEY = "E3815NIIXPH9BS1J5ZPDQA7P59VYAR67C7";
      axios
        .get(
          `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${API_ETHER_KEY}`
        )
        .then((res) => {
          setPrice(res.data.result);
          const timestamp = Number(res.data.result.ethusd_timestamp);
          const date = new Date(timestamp);
          setUpdatedPriceDate(
            "UpDate:" +
              date.getHours() +
              ":" +
              date.getMinutes() +
              ":" +
              date.getSeconds()
          );
        });

      axios
        .get(
          `https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=${API_ETHER_KEY}`
        )
        .then((res) => console.log(res.data.result));
    } catch (error) {
      console.log(error);
    }
  };

  // a function to check if wallet exists

  const checkIfAccountExist = async () => {
    try {
      if (!window.ethereum) return console.log("Please install Metamask!");
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setUserAccount(accounts[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // a function to connect to wallet

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("Please install Metamask!");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccount",
      });
      if (accounts.length) {
        setUserAccount(accounts[0]);
      } else {
        console.log("Sorry You don't have account!");
      }
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfAccountExist();
    getEtherPrice();
  }, []);

  return (
    <div>
      <div>
        <div className="">
          <Link href={"/"}>
            <div className="">
              {/* <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="NavBar_supplyIcon__da_5d" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 21v-14"></path><path d="M9 15l3 -3l3 3"></path><path d="M15 10l3 -3l3 3"></path><line x1="3" y1="21" x2="21" y2="21"></line><line x1="12" y1="21" x2="12" y2="12"></line><path d="M3 6l3 -3l3 3"></path><path d="M6 21v-18"></path></svg> */}
              <h1 className="hidden md:block">Ether Finance</h1>
              <h1 className="md:hidden block">
                <Image src={logo} alt="logo" width={50} height={50} />
              </h1>
            </div>
          </Link>
        </div>

        {/*// Right side of header  */}
        <div className="text-white">
          
          {
            userAccount.length ? (<button onClick={()=>openUserInfo()}>Acc: {userAccount.slice(0,19)}</button>):(
              ""
            )
          }
        </div>
      </div>
    </div>
  );
};

export default NavBar;
