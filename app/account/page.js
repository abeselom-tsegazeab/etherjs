import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import Image from "next/image";

import Style from "../../styles/Account.module.css";
import { useEtherScan } from "@/context/Ether";
import Loading from "@/components/Loading";

const page = () => {
  const { provider } = useEtherScan();
  const router = useRouter();
  const { query } = router;
  const acc = Object.keys(query)[0];

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
        setLoading(true);
      }

      // API Etherscan
    
  
    } catch (error) {
      console.log("Something went wrong");
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
          ></button>
        </div>
      ) : (
      <div>
         {loading ? (<div className={Style.loading}>
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
        {!loading ? <Table/> : ''}
      </div>
      )}
    </div>
  );
};

export default page;
