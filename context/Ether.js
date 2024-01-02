'use client'
import React, { useContext } from "react";
import { ethers } from "ethers";


export const Etherscan = React.createContext()

export const EtherProvider = ({childred})=>{
    const data = 'Etherscan Clone';

    return (
        <Etherscan.Provider value={{data}}>
            <div>
            {childred}
            </div>
        </Etherscan.Provider> 
    )
}

export function useEtherScan(){
    return useContext(Etherscan)
}


