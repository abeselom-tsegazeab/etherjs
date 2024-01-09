import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

const BlockRange = ({ blockRangeTransaction, handleClick }) => {
  return (
    <div>
      {blockRangeTransaction.length === 0 ? (
        <div className={Style.sorry}>
          <p>Sorry There is no data</p>
        </div>
      ) : (
        <div className={Style.dataTable}>
          {/*  hash */}
          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Hash</p>
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
                  <p>{tsx.from.slice(0, 10)}...</p>
                </div>
              ))}
            </div>
          </div>

          {/* To */}
          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>To</p>
            </div>
            <div className={Style.tableInfo}>
              {accountHistory.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p className={Style.toLink}>
                    <Link href={{ pathname: `/block/${tsx.to}` }}>
                      <span onClick={handleClick}>
                        {tsx.to.slice(0, 10)}...
                      </span>
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
                  <p>{tsx.value.slice(0, 5)}...ETH</p>
                </div>
              ))}
            </div>
          </div>

          {/* gas price */}

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Gas Price</p>
            </div>
            <div className={Style.tableInfo}>
              {accountHistory.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.gasPrice}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Block Hash */}
          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>BlockHash</p>
            </div>
            <div className={Style.tableInfo}>
              {accountHistory.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.blockHash.slice(0, 10)}...</p>
                </div>
              ))}
            </div>
          </div>

          {/* Confirmation */}

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Confirmation</p>
            </div>
            <div className={Style.tableInfo}>
              {accountHistory.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.confirmations}</p>
                </div>
              ))}
            </div>
          </div>

          {/* cummulative gas used */}

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Cummulative Gas</p>
            </div>
            <div className={Style.tableInfo}>
              {accountHistory.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.cumulativeGasUsed}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gas */}

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Gas</p>
            </div>
            <div className={Style.tableInfo}>
              {accountHistory.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.gas}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gas  Used*/}

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Gas Used</p>
            </div>
            <div className={Style.tableInfo}>
              {accountHistory.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.gasUsed}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nonce */}
          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Nonce</p>
            </div>
            <div className={Style.tableInfo}>
              {accountHistory.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.nonce}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Index */}

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Index</p>
            </div>
            <div className={Style.tableInfo}>
              {accountHistory.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.transactionIndex}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Status */}

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Status</p>
            </div>
            <div className={Style.tableInfo}>
              {accountHistory.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.txreceipt_status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlockRange;
