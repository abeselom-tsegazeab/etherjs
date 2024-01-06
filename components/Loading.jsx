import React from 'react'
import Style from '../styles/Loading.module.css'
const Loading = () => {
  return (
    <div className="bg-blue w-[100vw] h-[100vh] border relative ">
      <div class={`${Style.lds_hourglass}`}>
      
      </div>
    </div>
  )
}

export default Loading