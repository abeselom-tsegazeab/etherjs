import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import Link from 'next/link'


import Style from '../styles/Table.module.css'

const Transaction = ({accountHistory,handleClick}) => {
  return (
    <div className={Style.dataTable}>
      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>TSX Hash</p>
        </div>
        <div className={Style.tableInfo}>
          {
            
          }
        </div>
      </div>
      
    </div>
  )
}

export default Transaction