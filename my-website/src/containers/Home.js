import React from 'react';

const Home = () => {
  return (
    <div className='h-screen mt-10' style={{ backgroundImage: "url('images/background2.PNG')" }}>
      <div style={{ background: 'rgba(0, 0, 0, 0.5)' }} className='h-full background text-white text-center pt-60 px-56'>
        <h1 className='text-6xl mb-3'>Minh Le</h1>
        <h2 className='text-4xl mb-3'>A Vietnamese Software Engineer. Interested in Web, Mobile App and Game development</h2>
        <button className='btn btn-5 hover-border-11'>
          <span>Get to know me</span>
        </button>
      </div>
    </div>
  )
}

export default Home