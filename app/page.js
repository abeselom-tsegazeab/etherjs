'use client'
import Image from 'next/image'
import { ethers } from 'ethers'
import React,{useState,useEffect} from 'react'
export default function Home() {
  const [currentAccount,setCurrentAccount] = useState("")
  const address = "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"
  const balance = provider.getBalance()

  const provider = new ethers.providers.EtherscanProvider()
  console.log(provider)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
    <div>
      Hi there
    </div>
    </main>
  )
}
