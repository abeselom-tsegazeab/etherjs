'use client'
import React from "react";
import Image from "next/image";
import { RiSendPlaneFill } from "react-icons/ri";
import {
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialInstagram,
} from "react-icons/ti";
import { FaEthereum } from "react-icons/fa";

//INTERNAL IMPORT
import Style from "../styles/Footer.module.css";
import footerLogo from "../public/assets/ethereum.png";

const Footer = () => {
  return (
    <div className={`${Style.footer} `}>
      <div className={Style.footer__box}>
        <FaEthereum className="text-6xl hover:text-[#9a02ac]"/>
      </div>
      <div className={Style.footer__box}>
        <div className={Style.footer__input}>
          <input type="Email" placeholder="Email*" />
          <RiSendPlaneFill />
        </div>
      </div>

      <div className={Style.footer__box}>
        <div className={Style.social}>
          <TiSocialTwitter className=" hover:text-[#9a02ac]"/>
          <TiSocialLinkedin className=" hover:text-[#9a02ac]"/>
          <TiSocialFacebook className=" hover:text-[#9a02ac]"/>
          <TiSocialInstagram className=" hover:text-[#9a02ac]"/>
          <TiSocialYoutube className=" hover:text-[#9a02ac]"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;