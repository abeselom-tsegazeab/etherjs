import React from "react";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

import Style from "../styles/Table.module.css";

const Transaction = ({ accountHistory, handleClick }) => {
  return (
    <div className={Style.dataTable}>
      {/* tsx hash */}
      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>TSX Hash</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((tsx, index) => (
            <div className={Style.transHash} key={index}>
              <AiFillEye />
              <p>{tsx.hash.slice(0, 20)}...</p>
            </div>
          ))}
        </div>
      </div>

      {/* method */}

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Method</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((tsx, index) => (
            <div className={Style.transHash} key={index}>
              <p>Transfer</p>
            </div>
          ))}
        </div>
      </div>

      {/* block */}
      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Block</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((tsx, index) => (
            <div className={Style.transHash} key={index}>
              <p className={Style.toLink}>
                <Link href={{ pathname: `/block/${tsx.blockNumber}` }}>
                  <span onClick={handleClick}>{tsx.blockNumber}</span>
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* TimeStamp */}
      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>TimeStamp</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((tsx, index) => (
            <div className={Style.transHash} key={index}>
              <p>{tsx.timeStamp}</p>
            </div>
          ))}
        </div>
      </div>

      {/*From  */}
      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>From</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((tsx, index) => (
            <div className={Style.transHash} key={index}>
              <p >{tsx.from.slice(0, 10)}...</p>
            </div>
          ))}
        </div>
      </div>

      {/* To */}
      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Block</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((tsx, index) => (
            <div className={Style.transHash} key={index}>
              <p className={Style.toLink}>
                <Link href={{ pathname: `/block/${tsx.to}` }}>
                  <span onClick={handleClick}>{tsx.to.slice(0, 10)}...</span>
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Value */}

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Value</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((tsx, index) => (
            <div className={Style.transHash} key={index}>
              <p>
               {tsx.value.slice(0,5)}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transaction;
