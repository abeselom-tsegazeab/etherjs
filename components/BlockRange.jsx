import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";


import Style from '@/styles/Table.module.css'
const BlockRange = ({ blockRangeTransaction, handleClick }) => {
  return (
    <div>
      {blockRangeTransaction.length === 0 ? (
        <div className={Style.sorry}>
          <p>Sorry There is no data</p>
        </div>
      ) : (
        <div className={`${Style.dataTable}`}>
          
          {/*  hash */}
          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Hash</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((tsx, index) => (
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
              <p>Block No</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((tsx, index) => (
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
              {blockRangeTransaction.map((tsx, index) => (
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
              {blockRangeTransaction.map((tsx, index) => (
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
              {blockRangeTransaction.map((tsx, index) => (
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
              {blockRangeTransaction.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.value.slice(0, 5)}...ETH</p>
                </div>
              ))}
            </div>
          </div>

          {/* gas used */}

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Gas Used</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.gasUsed}</p>
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
              {blockRangeTransaction.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.gas?.slice(0, 10)}...</p>
                </div>
              ))}
            </div>
          </div>

          {/* Input */}

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Input</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.input ? tsx.input : "No Data!" }</p>
                </div>
              ))}
            </div>
          </div>

          {/*  Type */}

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Type</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.type}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TraceId */}

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>TraceId</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.traceId}</p>
                </div>
              ))}
            </div>
          </div>

          {/* isError */}

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>isError</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.isError}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contract Address */}
          <div className={Style.column}>
            <div className={`${Style.tableTitle}`}>
              <p>Contract Address</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((tsx, index) => (
                <div  key={index}>
                  <p className="">{tsx.contractAddress ? tsx.contractAddress :"No Address!"}</p>
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
