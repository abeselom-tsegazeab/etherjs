import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { ethers } from 'ethers'
import  Image from 'next/image'



import Style from '../../styles/Account.module.css'
import { Etherscan, useEtherScan } from '@/context/Ether'


const page = () => {
  const {provider} = useEtherScan()
  const router = useRouter()
  const {query} = router
  const acc = Object.keys(query)[0];

  const [account, setAccount] = useState('')
  const [balance, setBalance] = useState('')
  const [totalTransaction, setTotalTransaction] = useState('')
  
  return (
    <div>Acccount</div>
  )
}

export default page