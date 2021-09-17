import React from "react";

const Hanpu = () => {
  return (
    <div className='text-center'>
      <div className='mt-12'>
        <img className='block mx-auto bg-white' src='/images/hanpu.png' alt='Hanpu Technology' />
        <h2 className='text-3xl font-semibold mt-7'>Intern Front-end Engineer</h2>
        <h2 className='text-2xl'>Hanoi, Vietnam</h2>
        <h2 className='text-2xl'>May 2020 - August 2020</h2>
      </div>
      <ul className='text-left list-disc px-20 mt-10'>
        <li className='mb-3'>Develop Hanpu-boss mobile app - application for business management and customer care, using React Native, Redux-thunk, GraphQL
        </li>
        <li className='mb-3'>Develop bill creating and payment feature on front-end and store payment history in the database.
        </li>
        <li className='mb-3'>Develop employees’ work and management for administration features and send daily announcements to appropriate account
        </li>
      </ul>
    </div>
  )
}

export default Hanpu