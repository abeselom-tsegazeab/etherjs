'use client'
import React, { useState } from "react";
import axios from "axios";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { ethers } from "ethers";
import Image from "next/image";
import Tabel from "@/components/Tabel";
import Style from "../../../styles/Account.module.css";
import { useEtherScan } from "@/context/Ether";
import Loading from "@/components/Loading";
import logo from '../../../public/assets/ethereum.png'
const page = () => {
  const { provider } = useEtherScan();
  const router = useRouter();
  const { query } = router;
  const params = useParams()

  const acc = params.address;

  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [totalTransaction, setTotalTransaction] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  const [accountHistory, setAccountHistory] = useState([]);
  const [internalByAddress, setInternalByAddress] = useState([]);
  const [ERC20, setERC20] = useState([]);
  const [ERC21, setERC21] = useState([]);
  const [ERC1155, setERC1155] = useState([]);
  const [blockMindedByAddress, setBlockMindedByAddress] = useState([]);
  const [blockRangeTransaction, setBlockRangeTransaction] = useState([]);

  const accountData = async () => {
    try {

      setAccount(acc);

      if (open) {
        setOpen(false);
      }

      // account name
      const ESN = await provider.lookupAddress(acc);
      if (ESN === null) {
        setName(ESN);
        setLoading(false);
      } else {
        setName(ESN);
        setLoading(false);
      }

      // Transaction history
   const transactionHistory=  await axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${acc}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${process.env.NEXT_PUBLIC_ETHER_API_KEY}`)
    setAccountHistory(transactionHistory.data.result)


    // Transaction by internal hash
    const tsxByInternalHash = await axios.get(`https://api.etherscan.io/api?module=account&action=txlistinternal&txhash=0x40eb908387324f2b575b4879cd9d7188f69c8fc9d87c901b9e2daaea4b442170&apikey=${process.env.NEXT_PUBLIC_ETHER_API_KEY}`)
    // .then((res)=>console.log(res))
    setInternalByAddress(tsxByInternalHash.data.result)

   // etherscan api erc20 token
   const ERC20Token = await axios.get(`https://api.etherscan.io/api
   ?module=account
   &action=tokentx
   &contractaddress=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2
   &address=0x4e83362442b8d1bec281594cea3050c8eb01311c
   &page=1
   &offset=100
   &startblock=0
   &endblock=27025780
   &sort=asc
   &apikey=${process.env.NEXT_PUBLIC_ETHER_API_KEY}`)
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div className={Style.accountDIV}>
      {open ? (
        <div className={Style.btnContainer}>
          <h1>
            {open
              ? "Welcome To Ether Finance"
              : "Please wait we are loading data"}
          </h1>
          <button
            className={Style.openBtn}
            onClick={() => accountData()}
          >Account</button>
        </div>
      ) : (
      <div>
         {false ? (<div className={Style.loading}>
          <Loading/>
        </div>):(
          <div className={Style.container}>
            <div className={Style.box}>
              <div className={Style.account}>
                <Image src={logo} alt="logo" width={50} height={50}/>
                <p>
                  Address:<span>{acc}</span>
                </p>
              </div>
              <div className={Style.owner}>
                
                <p onClick={()=>accountData()}>Owner</p>
                {name || "Hello"}
              </div>
            </div>
            <div className={Style.overviewBox}>
              <div className={Style.overview}>
                <div className={Style.overviewTitle}>
                  <p>Overview</p>
                  <p className={Style.miner}>
                    {name || "Miner"}: &nbsp; {account.slice(0,10)}...
                  </p>
                </div>
                <div className={Style.accountBalance}>
                  <p className={Style.color}>
                    Balance
                  </p>
                  <p>{balance} ETH</p>
                </div>
              </div>

              <div className={Style.branding}>
                <h2>
                  Welcome <br/>
                  Ether Finance Tracker
                </h2>
                <p>
                  Hey, welcome to ether finance tracker, find out your ethereum {name || account.slice(0,10)} &nbsp; finance status
                </p>
              </div>
            </div>
          </div>
        )}
        {!loading ? <Tabel/> : ''}
      </div>
      )}
    </div>
  );
};

export default page;