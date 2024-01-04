import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { ethers } from 'ethers'
import  Image from 'next/image'



import Style from '../../styles/Account.module.css'
import { useEtherScan } from '@/context/Ether'


const page = () => {
  const {provider} = useEtherScan()
  const router = useRouter()
  const {query} = router
  const acc = Object.keys(query)[0];

  const [account, setAccount] = useState('')
  const [balance, setBalance] = useState('')
  const [totalTransaction, setTotalTransaction] = useState('')
  const [name, setName] = useState('')
  const [open, setOpen] = useState(true)
  const [loading, setLoading] = useState(true);

  const [accountHistory, setAccountHistory] = useState([])
  const [internalByAddress, setInternalByAddress] = useState([])
  const [ERC20, setERC20] = useState([])
  const [ERC21, setERC21] = useState([])
  const [ERC1155, setERC1155] = useState([])
  const [blockMindedByAddress, setBlockMindedByAddress] = useState([])
  const [blockRangeTransaction, setBlockRangeTransaction] = useState([])
  

  return (
    <div>Acccount</div>
  )
}

export default page