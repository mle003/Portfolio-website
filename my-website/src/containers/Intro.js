import React from 'react';
import { Image, Button } from 'antd';
import '../styles/Intro.css'

const Intro = () => {
  return (
    <div id='intro' className='mt-20 px-48 text-white text-left'>
      <h1 className='mb-10 text-2xl font-bold'>About me</h1>
      <div className='flex justify-between'>
        <div>
          <Image src='/images/Profile-picture.jpg' height={495} alt='Profile Picture' preview={false} style={{ borderRadius: '50%' }} />
        </div>
        <div>
          <div style={{ width: '490px' }} className='rounded-lg border-2 text-left p-7'>
            <p className='mb-3'>Hello! My name is Minh Le. I'm a web and mobile developer who enjoys solving both programming and real-world problems. I has been programming since 2017, which focused on front-end web programming mostly. From 2019, I have been working as a fullstack developer in both web and mobile app and also start to gain knowledge about game development. I love to learn about algorithms and apply them to solve mathematical/programming problems. Besides, I love to develop software solution to solve real-life problem of myself or my communities. If there is any project that want to collaborate with me, feel free to reach out to me.</p>
            <p>This is my resume. I'm currently open to any intern/new-grad opportunity for Fall/Winter 2021 and Spring/Summer 2022.</p>
            <a href='https://docs.google.com/document/d/1ikNL07zxIfrk3m6rcbd4qufvqDn0Fjws3DtF36Elhvg/edit?usp=sharing'>
              <Button style={{ backgroundColor: '#395f9e' }} className='border-2 rounded p-2 font-semibold border-black cursor-pointer relative mt-5 three'>
                <span>Resume</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro