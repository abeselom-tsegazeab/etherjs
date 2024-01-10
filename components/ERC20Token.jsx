"use client";
import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

import Style from "@/styles/Table.module.css";
const ERC20Token = ({ ERC20 }) => {
  return (
    <div>
      {ERC20.length === 0 ? (
        <div className={Style.sorry}>
          <h1>Sorry There is no ERC20</h1>
        </div>
      ) : (
        <div className={Style.dataTable}>
          {/* tsx hash */}
          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Hash</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((tsx, index) => (
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
              {ERC20.map((tsx, index) => (
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
              {ERC20.map((tsx, index) => (
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
              {ERC20.map((tsx, index) => (
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
              {ERC20.map((tsx, index) => (
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
              {ERC20.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.value.slice(0, 5)}...ETH</p>
                </div>
              ))}
            </div>
          </div>

          {/* gas Used */}

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Gas Used</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.gasUsed}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Token Name */}
          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Token Name</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.tokenName}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Token Symbol */}
          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Token Symbol</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.tokenSymbole}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Token Decimal */}
          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Token Decimal</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.tokenDecimal}</p>
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
              {ERC20.map((tsx, index) => (
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
              {ERC20.map((tsx, index) => (
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
              {ERC20.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.gas}</p>
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
              {ERC20.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.input}</p>
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
              {ERC20.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.transactionIndex}</p>
                </div>
              ))}
            </div>
          </div>

          {/* contract address */}

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Contract Address</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC20.map((tsx, index) => (
                <div className={Style.transHash} key={index}>
                  <p>{tsx.contractAddress ? tsx.contractAddress : "No Data"}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ERC20Token;
