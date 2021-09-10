import React from 'react';
import { Button } from 'antd';

const Intro = () => {
  return (
    <div className='h-screen mt-10' style={{ backgroundImage: "url('images/background2.PNG')" }}>
      <div style={{ background: 'rgba(0, 0, 0, 0.5)' }} className='h-full background text-white text-center pt-60'>
        <h1 className='text-6xl mb-3'>Minh Le</h1>
        <h2 className='text-6xl mb-3'>A Vietnamese Software Engineer</h2>
        <Button className='text-3xl mt-2 border-2 rounded p-3 text-black border-black bg-white'>Get to know me</Button>
      </div>
    </div>
  )
}

export default Intro