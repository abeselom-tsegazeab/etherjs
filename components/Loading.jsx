'use client'
import React from 'react'
import Style from '../styles/Loading.module.css'
const Loading = () => {
  return (
  <div className={`${Style.parent}`}>
      <div class={`${Style.lds_hourglass} `}>
      
      </div>
  </div>
  )
}

export default Loading