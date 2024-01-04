import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { ethers } from 'ethers'
import  Image from 'next/image'



import Style from '../../styles/Account.module.css'
import { Etherscan } from '@/context/Ether'


const page = () => {
  return (
    <div>Acccount</div>
  )
}

export default page