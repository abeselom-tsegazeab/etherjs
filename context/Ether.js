'use client'
import React, { useContext, useState } from "react";
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
    `https://mainnet.infura.io/v3/${apiKey}`
)
export const Etherscan = React.createContext()

export const EtherProvider = ({children})=>{
    const [data, setData] = useState('Etherscan Clone')

    return (
        <Etherscan.Provider value={{data}}>
            <div>
            {children}
            </div>
        </Etherscan.Provider> 
    )
}

export function useEtherScan(){
    return useContext(Etherscan)
}


