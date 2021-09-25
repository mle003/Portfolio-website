import React from 'react';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div id='home' className='h-screen mt-10'>
      <div style={{ background: 'rgba(0, 0, 0, 0.5)' }} className='h-full background text-white text-center pt-60 px-56'>
        <h1 className='text-6xl mb-3 text_shadows'>Minh Le</h1>
        <h2 className='text-4xl mb-3 w3-animate-bottom'>A Vietnamese Software Engineer. Interested in Web, Mobile App and Game development</h2>
        <Link to='intro' smooth={true} duration={1000}>
          <button className='btn btn-5 hover-border-11'>
            <span>Get to know me</span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home