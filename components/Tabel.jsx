import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

import Style from "../styles/Table.module.css";
import Transaction from "./Transaction";
import Internal from "./Internal";
import ERC20Token from "./ERC20Token";
import MindedBlock from "./MindedBlock";
import BlockRange from "./BlockRange";
import ERC21Token from "./ERC21Token";
import ERC1155Token from "./ERC1155Token";

const Tabel = ({
  accountHistory,
  totalTransaction,
  internalByAddress,
  ERC20,
  blockMindedByAddress,
  blockRangeTransaction,
  ERC21,
  ERC1155,
  accountData,
}) => {
  const [historyAccount, setHistoryAccount] = useState(true);
  const [addressInternalTransaction, setAddressInternalTransaction] = useState(false);
  const [openERC20, setOpenERC20] = useState(false);
  const [addressByMinedeBlock, setAddressByMinedeBlock] = useState(false);
  const [TransactionRangeBlock, setTransactionRangeBlock] = useState(false);
  const [openERC21, setOpenERC21] = useState(false);
  const [openERC1155, setOpenERC1155] = useState(false);
  const [isActive,setIsActive] = useState(1)
  const tabs = (e) => {
    const buttonText = e.target.innerText;
    if (buttonText === "Transaction") {
      setIsActive(1)
      setHistoryAccount(true);
      setAddressInternalTransaction(false);
      setTransactionRangeBlock(false);
      setOpenERC20(false);
      setOpenERC21(false);
      setOpenERC1155(false);
      setAddressByMinedeBlock(false);
    } else if (buttonText === "Internal") {
      setIsActive(2)
      setAddressInternalTransaction(true);
      setHistoryAccount(false);
      setTransactionRangeBlock(false);
      setOpenERC20(false);
      setOpenERC21(false);
      setOpenERC1155(false);
      setAddressByMinedeBlock(false);
    } else if (buttonText === "Tsx") {
      setIsActive(3)
      setTransactionRangeBlock(true);
      setAddressInternalTransaction(false);
      setHistoryAccount(false);
      setOpenERC20(false);
      setOpenERC21(false);
      setOpenERC1155(false);
      setAddressByMinedeBlock(false);
    } else if (buttonText === "ERC-20") {
      setIsActive(4)
      setOpenERC20(true);
      setAddressInternalTransaction(false);
      setHistoryAccount(false);
      setTransactionRangeBlock(false);
      setOpenERC21(false);
      setOpenERC1155(false);
      setAddressByMinedeBlock(false);
    } else if (buttonText === "ERC-21") {
      setIsActive(5)
      setOpenERC21(true);
      setAddressInternalTransaction(false);
      setHistoryAccount(false);
      setTransactionRangeBlock(false);
      setOpenERC20(false);
      setOpenERC1155(false);
      setAddressByMinedeBlock(false);
    } else if (buttonText === "ERC1155") {
      setIsActive(6)
      setOpenERC1155(true);
      setAddressInternalTransaction(false);
      setHistoryAccount(false);
      setTransactionRangeBlock(false);
      setOpenERC20(false);
      setOpenERC21(false);
      setAddressByMinedeBlock(false);
    } else if (buttonText === "Mined") {
      setIsActive(7)
      setAddressByMinedeBlock(true);
      setAddressInternalTransaction(false);
      setHistoryAccount(false);
      setTransactionRangeBlock(false);
      setOpenERC20(false);
      setOpenERC21(false);
      setOpenERC1155(false);
    }
  };
  ///////shhshs
  return (
    <div className={Style.table}>
      <div className={Style.table__head}>
        <button className={`${Style.btn} ${isActive === 1 && '!text-blue-700'} `} onClick={(e) => tabs(e)}>
          Transaction
        </button>
        <button className={`${Style.btn} ${isActive === 2 && '!text-blue-700'} `} onClick={(e) => tabs(e)}>
          Internal
        </button>
        <button className={`${Style.btn} ${isActive === 3 && '!text-blue-700'} `} onClick={(e) => tabs(e)}>
          Tsx
        </button>

        <button className={`${Style.btn} ${isActive === 7 && '!text-blue-700'} `} onClick={(e) => tabs(e)}>
          Mined
        </button>
        <button className={`${Style.btn} ${isActive === 4 && '!text-blue-700'} `} onClick={(e) => tabs(e)}>
          ERC-20
        </button>
        <button className={`${Style.btn} ${isActive === 5 && '!text-blue-700'} `} onClick={(e) => tabs(e)}>
          ERC-21
        </button>
        <button className={`${Style.btn} ${isActive === 6 && '!text-blue-700'} `} onClick={(e) => tabs(e)}>
          ERC1155
        </button>
      </div>

      <div className={`${Style.numberOfTrans} `}>
        <FaFilter />
        <p>
          latest 10 from a total of <span>{totalTransaction}</span> transaction
        </p>
      </div>

      {historyAccount ? (
        <Transaction
          handleClick={accountData}
          accountHistory={accountHistory}
        />
      ) : (
        ""
      )}

      {addressInternalTransaction ? (
        <Internal
          internalByAddress={internalByAddress}
          handleClick={accountData}
        />
      ) : (
        ""
      )}

      {openERC20 ? <ERC20Token ERC20={ERC20} /> : ""}

      {addressByMinedeBlock ? (
        <MindedBlock
          blockMindedByAddress={blockMindedByAddress}
          handleClick={accountData}
        />
      ) : (
        ""
      )}
      {TransactionRangeBlock ? (
        <BlockRange
          blockRangeTransaction={blockRangeTransaction}
          handleClick={accountData}
        />
      ) : (
        ""
      )}
      {openERC21 ? <ERC21Token ERC21={ERC21} handleClick={accountData} /> : ""}

      {openERC1155 ? (
        <ERC1155Token ERC1155={ERC1155} handleClick={accountData} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Tabel;