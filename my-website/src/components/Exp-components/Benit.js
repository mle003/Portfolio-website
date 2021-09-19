import React from "react";
import iBenit from '../../images/benit.png';

const Benit = () => {
  return (
    <div className='text-center'>
      <div className='mt-12'>
        <img className='block mx-auto bg-white' src={iBenit} alt='Hanpu Technology' />
        <h2 className='text-3xl font-semibold mt-7'>Software Engineer</h2>
        <h2 className='text-2xl'>Hanoi, Vietnam</h2>
        <h2 className='text-2xl'>Novemver 2020 - Feb 2021</h2>
      </div>
      <ul className='text-left list-disc px-20 mt-10'>
        <li className='mb-3'>Develop PTE Magic - website for practicing and taking sample PTE test based using ReactJs, Redux-Saga, HTML, SCSS, NodeJS, MongoDB, Ant Design
        </li>
        <li className='mb-3'>Create a practice process for users based on their current and target scores
        </li>
        <li className='mb-3'>Developed and maintain the organization website in React and the Cloud Firestore database (Google Firebase)
        </li>
      </ul>
    </div>
  )
}

export default Benit;