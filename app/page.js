"use client";
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import React,{useEffect,useState,useContext} from 'react';
import { ethers } from 'ethers';
import Link from 'next/link';
import {SiMinutemailer} from 'react-icons/si'
import { Etherscan } from '@/context/Ether.js';

import Style from '../styles/Home.module.css'
import logo from '../public/assets/ether.png'

export default function Home() {
  // const {data} = useContext(Etherscan);
  return (
    <main className="">
      <NavBar/>
      <div>
{/* {data} */}
      </div>
      <Footer/>
    </main>
  );
}
