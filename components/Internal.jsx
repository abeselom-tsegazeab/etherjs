import React,{useEffect,useState} from 'react'
import { FaFilter } from 'react-icons/fa'
import { AiFillEye } from 'react-icons/ai'
import Link from 'next/link'


import Style from '@/styles/Table.module.css'



const Internal = ({internalByAddress,handleClick}) => {
  return (
    <div className={Style.dataTable}>

      {/* Hash */}
      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Hash</p>
        </div>
        <div className={Style.tableInfo}>
          {internalByAddress?.map((e,i)=>(
            <div className={Style.transHash} key={i}>
              <AiFillEye/>
              <p>{e.hash.slice(0,35)}...</p>
            </div>
          ))}
        </div>
      </div>

            {/* Block Number */}

            <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Block No</p>
        </div>
        <div className={Style.tableInfo}>
          {internalByAddress?.map((e, i) => (
            <div className={Style.transHash} key={i}>
              <p>
                <Link href={{pathname:`/block/${e.blockNumber}`}}>
                  {e.blockNumber}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Trace id */}

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>TraceId</p>
        </div>
        <div className={Style.tableInfo}>
          {internalByAddress?.map((e, i) => (
            <div className={Style.transHash} key={i}>
              <p>
               {e.traceId}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Timestamp */}

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>TimeStamp</p>
        </div>
        <div className={Style.tableInfo}>
          {internalByAddress?.map((e, i) => (
            <div className={Style.transHash} key={i}>
              <p>
               {e.timeStamp}
              </p>
            </div>
          ))}
        </div>
      </div>

{/* From */}
<div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>From</p>
        </div>
        <div className={Style.tableInfo}>
          {internalByAddress?.map((e, i) => (
            <div className={Style.transHash} key={i}>
              <p>
                <Link href={{pathname:`/account/${e.from}`}}>
                  <p onClick={handleClick}>
                  {e.from.slice(0,20)}...
                  </p>
                </Link>
              </p>
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
          {internalByAddress?.map((e, i) => (
            <div className={Style.transHash} key={i}>
              <p>
              
                  {e.to.slice(0,20)}...
               
              </p>
            </div>
          ))}
        </div>
      </div>

{/* value */}


<div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Value</p>
        </div>
        <div className={Style.tableInfo}>
          {internalByAddress?.map((e, i) => (
            <div className={Style.transHash} key={i}>
              <p>
              
                  {e.value.slice(0,20)}...
               
              </p>
            </div>
          ))}
        </div>
      </div>

{/* Gas used */}


<div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Gas Used</p>
        </div>
        <div className={Style.tableInfo}>
          {internalByAddress?.map((e, i) => (
            <div className={Style.transHash} key={i}>
              <p>
              
                  {e.gasUsed.slice(0,20)}
               
              </p>
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
          {internalByAddress?.map((e, i) => (
            <div className={Style.transHash} key={i}>
              <p>
              
                  {e.isError}
               
              </p>
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
          {internalByAddress?.map((e, i) => (
            <div className={Style.transHash} key={i}>
              <p>
              
                  {e.gas}
               
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Internal