"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ethers } from "ethers";
//Internal Block
import StyleTransaction from "@/styles/Block.module.css";
import { FaFilter } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";

import { useEtherScan } from "@/context/Ether";

const block = () => {
  const { provider } = useEtherScan()
  const params = useParams();

  const blockNumber = params.address;
  //OPEN
  const [open, setOpen] = useState(false);

  //BLOCK DATa
  const dataBlock = [];
  const [blockData, setblockData] = useState([]);
  const [transaction, seTtransaction] = useState([]);

  //FORMATE VALUE
  const [ethGasLimit, setEthGasLimit] = useState("");
  const [ethDifficulty, setDifficulty] = useState("");
  const [ethGasUsed, setEthGasUsed] = useState("");

  //ACTIVE STATE
  const [blockNo, setBlockNo] = useState(true);
  const [transactioTab, setTransactioTab] = useState(false);

  const openTab = () => {
    if (blockNo) {
      setBlockNo(false);
      setTransactioTab(true);
    } else if (transactioTab) {
      setBlockNo(true);
    }
  };

  const getBlockDetails = async () => {
    try {
      const getBlock = await provider.getBlock(Number(blockNumber));
      dataBlock.push(getBlock);
      setblockData(getBlock);

      const gasLimit = ethers.utils.formatEther(getBlock.gasLimit);
      setEthGasLimit(gasLimit);
      const gasUsed = ethers.utils.formatEther(getBlock.gasUsed);
      setEthGasUsed(gasUsed);
      const difficulty = ethers.utils.formatEther(getBlock._difficulty);
      setDifficulty(difficulty);

      //TRANSACTION
      seTtransaction(getBlock.transactions);
      // console.log(getBlock.transactions);
    } catch (error) {
      console.log(error);
    }
  };
  // const openDateModal = () => {
  //   if (open) {
  //     setOpen(false);
  //     getBlockDetails();
  //   }
  // };/

  useEffect(() => {
    getBlockDetails();
  }, []);

  return (
    <div className={StyleTransaction.block}>
      <div className={StyleTransaction.box}>
        <div className={StyleTransaction.box__header}>
          <h3>Block Number</h3>
          <p>{blockNumber}</p>
        </div>
        <div className={StyleTransaction.blockTable}>
          <div className={StyleTransaction.blockBtn}>
            <button onClick={() => openTab()}>Block Details</button>
            <button onClick={() => openTab()}>Block Transaction</button>
          </div>

          {blockNo ? (
            <div>
              <div className={StyleTransaction.dataRow}>
                <p>Number</p>
                <p>{blockNumber}</p>
              </div>
              <div className={StyleTransaction.dataRow}>
                <p>TimeStamp</p>
                <p>{blockData.timestamp}</p>
              </div>
              <div className={StyleTransaction.dataRow}>
                <p>Miner</p>

                <Link href={{ pathname: `/account/${blockData.miner}`}}>
                  <p className={`${StyleTransaction.color} hover:text-white text-blue-700`}>{blockData.miner}</p>
                </Link>
              </div>
              <div className={StyleTransaction.dataRow}>
                <p>Hash</p>
                {/* ///////////////////// */}
                <p>{blockData.hash}</p>
              </div>
              <div className={StyleTransaction.dataRow}>
                <p>parentHash</p>
                <p>
                  {blockData.parntHash
                    ? blockData.parntHash
                    : "No Data Avaliable"}
                </p>
              </div>
              <div className={StyleTransaction.dataRow}>
                <p>Nonce</p>
                <p>{blockData.nonce}</p>
              </div>
              <div className={StyleTransaction.dataRow}>
                <p>Extra Data</p>
                <p>{blockData.extraData}</p>
              </div>
              <div className={StyleTransaction.dataRow}>
                <p>Difficulty</p>
                <p>
                  {blockData.difficulty
                    ? blockData.difficulty
                    : "No Data Avaliable"}
                </p>
              </div>
              <div className={StyleTransaction.dataRow}>
                <p>Gas Limit</p>
                <p>{ethGasLimit} ETH</p>
              </div>
              <div className={StyleTransaction.dataRow}>
                <p>Gas Used</p>
                <p>{ethGasUsed} ETH</p>
              </div>
              <div className={StyleTransaction.dataRow}>
                <p>Difficulty</p>
                <p>{ethDifficulty} ETH</p>
              </div>
             
              <br/>
              <p>Transactions</p>
              <div className={`w-fit !align-top mt-5`}>
                <div className="!flex !flex-col h-[200px] overflow-auto leading-10 ">
                 {blockData.transactions?.map((t,i)=>(
                  <Link href={{pathname:`/account/${t}`}}>
                  <p key={i} className="hover:text-blue-700">{t} ETH</p>
                  </Link>
                 ))}
                </div>
              </div>
            </div>
          ) : (
            <div className={Style.dataTable}>
              <div className={Style.coloum}>
                <div className={Style.tableTitle}>
                  <p>All Transaction In The Block {transaction.length}</p>
                </div>
                <div className={Style.tableInfo}>
                  {transaction.map((el, i) => (
                    <div key={i + 1} className={Style.transHash}>
                      <samp>{i + 1}</samp>
                      <Link
                        href={{
                          pathname: `/transaction/${blockData.hash}`
                        }}
                      >
                        <p className={StyleTransaction.color}>{el}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default block;