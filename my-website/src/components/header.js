import React from 'react';
import { Link } from 'react-scroll';
import { LinkedinOutlined, GithubOutlined, FacebookOutlined } from '@ant-design/icons'


const Header = () => {
  return (
    <div className='items-center justify-between flex bg-gray-300 fixed top-0 w-screen py-2 mb-16 z-10 px-7'>
      <div className='flex items-center ml-5'>
        <div id='logo-container'>
          <img src='/images/logo.png' alt='My logo' id="logo" />
        </div>
        <div className='flex justify-between ml-3'>
          <Link to='home' smooth={true} duration={1000} className='mr-5'>
            Home
          </Link>
          <Link to='intro' smooth={true} duration={1000} className='mr-5'>
            About me
          </Link>
          <Link to='experience' smooth={true} duration={1000} className='mr-5'>
            My experience
          </Link>
          <Link to='timeline' smooth={true} duration={1000}>
            Life Events
          </Link>
        </div>
      </div>
      <div className='w-1/2 text-right mr-5'>
        <a href='https://www.facebook.com/profile.php?id=100009818893162'>
          <FacebookOutlined className='text-3xl mr-3' />
        </a>
        <a href='https://github.com/mle003'>
          <GithubOutlined className='text-3xl mr-3' />
        </a>
        <a href='https://www.linkedin.com/in/minh-le-1094651ba/'>
          <LinkedinOutlined className='text-3xl mr-3' />
        </a>
        <a href='https://docs.google.com/document/d/1ikNL07zxIfrk3m6rcbd4qufvqDn0Fjws3DtF36Elhvg/edit?usp=sharing'>
          <button id="resume-button" className='border-2 rounded p-2 text-red-600 border-black cursor-pointer relative'>
            <span>Resume</span>
          </button>
        </a>
      </div>
    </div>
  )
}

export default Header