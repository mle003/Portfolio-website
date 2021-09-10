import React from 'react';
import { Button } from 'antd';
import { LinkedinOutlined, GithubOutlined, FacebookOutlined } from '@ant-design/icons'


const Header = () => {
  return (
    <div className='items-center justify-between flex bg-gray-300 fixed top-0 w-screen py-2 mb-16'>
      <div className='flex items-center ml-5'>
        <div id='logo-container'>
          <img src='/images/logo.png' alt='My logo' id="logo" />
        </div>
        <div className='flex justify-between ml-3 w-60'>
          <a href='#'>
            Home
          </a>
          <a href='#'>
            About me
          </a>
          <a href='#'>
            My experience
          </a>
        </div>
      </div>
      <div className='w-1/2 text-right mr-5'>
        <FacebookOutlined className='text-3xl mr-3' />
        <GithubOutlined className='text-3xl mr-3' />
        <LinkedinOutlined className='text-3xl mr-3' />
        <Button className='border-2 rounded p-2 border-black'>Resume</Button>
      </div>
    </div>
  )
}

export default Header