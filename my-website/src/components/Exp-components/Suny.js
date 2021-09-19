import React from "react";
import iSuny from '../../images/plattsburgh.png'

const Suny = () => {
  return (
    <div className='text-center'>
      <div className='mt-12'>
        <img className='block mx-auto bg-white' src={iSuny} height={200} width={200} alt='Hanpu Technology' />
        <h2 className='text-3xl font-semibold mt-7'>Teacher Assistant</h2>
        <h2 className='text-2xl'>Plattsburgh, NY</h2>
        <h2 className='text-2xl'>September 2021 - December 2021</h2>
      </div>
      <ul className='text-left list-disc px-20 mt-10'>
        <li className='mb-3'>Assisted professor in evaluating students assignments</li>
        <li className='mb-3'>Assisted 50+ students with class coursework and lab assignment</li>
        <li className='mb-3'>Worked as a peer tutor for Computer Science class: Data structure and algorithms</li>
      </ul>
    </div>
  )
}

export default Suny;