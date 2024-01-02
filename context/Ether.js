'use client'
import React, { useContext, useState } from "react";
import { ethers } from "ethers";


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


