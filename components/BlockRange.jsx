import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

const BlockRange = ({blockRangeTransaction, handleClick}) => {
  return (
    <div>
      {blockRangeTransaction.length === 0 ? (
        <div className={Style.sorry}>
          <p>Sorry There is no data</p>
        </div>
      ) : (
        <div className={Style.dataTable}>
          {/* Block No */}
          <div className={Style.column}>
            <div className={Style.tableTable}>
              <p>Block Number</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((e, i) => (
                <div className={Style.transHash} key={i}>
                  <AiFillEye />
                  <p className={Style.toLink}>
                    <Link href={{ pathname: `/block/${e.blockNumber}` }}>
                      {e.blockNumber}
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Block Reward */}
          <div className={Style.column}>
            <div className={Style.tableTable}>
              <p>Block Reward</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((e, i) => (
                <div className={Style.transHash} key={i}>
                  <p>{e.blockReward.slice(0, 10)}...</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timestamp */}
          <div className={Style.column}>
            <div className={Style.tableTable}>
              <p>TimeStamp</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((e, i) => (
                <div className={Style.transHash} key={i}>
                  <p>{e.timeStamp.slice(0, 10)}...</p>
                </div>
              ))}
            </div>
          </div>





        </div>
      )}
    </div>
  )
}

export default BlockRange