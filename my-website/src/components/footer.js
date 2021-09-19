import React from "react";
import logo from '../images/logo.png';

const Footer = () => {
  return (
    <div className='items-center justify-between flex bg-gray-300 py-2 z-10 px-7 mt-16'>
      <p>Design and built by Minh Le</p>
      <div>
        <img src={logo} alt='My logo' id="logo" />
      </div>
    </div>
  )
}

export default Footer;