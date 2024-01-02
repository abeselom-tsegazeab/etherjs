import React from "react";
import { ethers } from "ethers";


export const Etherscan = React.createContext()

export const EtherProvider = ({childred})=>{
    const data = 'Etherscan Clone';

    return (
        <Etherscan.Provider value={{data}}>
            {childred}
        </Etherscan.Provider>
    )
}



