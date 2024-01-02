"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";
import { TbChartArrowsVertical } from "react-icons/tb";
import { FaGlobe } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";


import logo from "../public/assets/ether.png";
import avatar from "../public/assets/avatar.png";
import Style from '../styles/NavBar.module.css';
const NavBar = () => {
  const [userAccount, setUserAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [count, setCount] = useState("");
  const [openModel, setOpenModel] = useState(false);
  const [price, setPrice] = useState([]);
  const [etherSupply, setEtherSupply] = useState([]);
  const [updatedPriceDate, setUpdatedPriceDate] = useState("");

  // openmodal box
  const openUserInfo = () => {
    if (openModel) {
      setOpenModel(false);
    } else if (!openModel) {
      setOpenModel(true);
    }
  };

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
        .then((res) => setEtherSupply(res.data.result));
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
    <div className="">
    <div>
      <div className={Style.navbar}>
        <div className={Style.navbar__container}>
          <div className={Style.left}>
            <Link href='/'>
              <div>
                <h1 className={Style.desktop}>Ether Finance</h1>
                <h1 className={Style.mobile}>
                  <Image src={logo} alt='logo' width={50} height={50} />
                </h1>
              </div>
            </Link>
          </div>
          <div className={Style.right}>
            {userAccount.length ? (
              <div className={Style.connected}>
                <button onClick={() => openUserInfo()}>
                  Acc: {userAccount.slice(0, 10)}..
                </button>
                {openModel ? (
                  <div className={Style.userModal}>
                    <div className={Style.user_box}>
                      <div className={Style.closeBtn}>
                        <MdOutlineClose onClick={() => openUserInfo()} />
                      </div>
                      <Image
                        src={avatar}
                        alt='user account'
                        width={50}
                        height={50}
                      />
                      <p>Acc:&nbsp;{userAccount.slice(0, 20)}..</p>
                      <p>Balance:&nbsp;{balance} ETH</p>
                      <p>Total Trans:&nbsp;{count} </p>
                    </div>
                  </div>
                ) : (
                ''
                )}
              </div>
            ) : (
              <button onClick={() => connectWallet()}>Connect Wallet</button>
            )}
          </div>
        </div>
      </div>
      <div className={Style.price}>
        <div className={`w-full !grid md:!grid-cols-2 grid-rows-2 py-3 ${Style.price__box}`}>
          <div className={Style.etherPrice}>
            <div>
            <FaEthereum className="text-5xl hover:text-[#fff]"/>
            </div>
            <div>
              <h4>ETHER PRICE</h4>
              <p>$ &nbsp;{price.ethusd}</p>
              <p>{price.ethusd} &nbsp;BTC ₿</p>
              <p>{updatedPriceDate} </p>
            </div>
          </div>
          <div className={Style.supplyEther}>
            <div>
              <TbChartArrowsVertical className={`${Style.supplyIcon} hover:text-[#fff]`} />
            </div>
            <div>
              <h4>TOTAL ETHER SUPPLY</h4>
              <p>{etherSupply}</p>
              <p>Updated Supply data</p>
              <p>&nbsp;</p>
            </div>
          </div>
          
          <div className="w-full h-full flex items-center justify-between ">
            <div className="flex flex-row items-center gap-8 w-full">
              <FaGlobe className="text-5xl hover:text-[#fff]"/>
            
              <span className="flex flex-col  justify-between text-left">
                <p>MARKET CAP</p>
                <p>$23-59-098-098-0</p>
              </span>
            </div>
          </div>

          <div className="w-full h-full flex items-center justify-between ">
            <div className="flex flex-row items-center gap-8 w-full">
              <FaTachometerAlt className="text-5xl hover:text-[#fff]"/>
            
              <span className="flex flex-col  justify-between text-left">
                <p>LAST FINILIZED BLOCK</p>
                <p>02934857</p>
              </span>
            </div>
          </div>
        </div>

        <div className={Style.price__box}>
          <div className={Style.tokenBox__logo}>
            <Image src={logo} alt='logo' width={200} height={200} />
          </div>

          <div className={Style.logoWidth}>
            <p>ERC20 TOKEN</p>
            <p>ERC21 TOKEN</p>
            <p>ERC1155 TOKEN</p>
            <p>CONTRACT</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NavBar;
