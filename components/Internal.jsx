import React,{useEffect,useState} from 'react'
import { FaFilter } from 'react-icons/fa'
import { AiFillEye } from 'react-icons/ai'
import Link from 'next/link'


import Style from '@/styles/Table.module.css'



const Internal = ({internalByAddress,handleClick}) => {
  return (
    <div className={Style.dataTable}>
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
    </div>
  )
}

export default Internal