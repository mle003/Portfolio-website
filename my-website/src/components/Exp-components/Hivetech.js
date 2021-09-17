import React from "react";

const Hivetech = () => {
  return (
    <div className='text-center'>
      <div className='mt-12'>
        <img className='block mx-auto bg-white' src='/images/hivetech.png' height={200} width={200} alt='Hanpu Technology' />
        <h2 className='text-3xl font-semibold mt-7'>Front-end Developer</h2>
        <h2 className='text-2xl'>Hanoi, Vietnam</h2>
        <h2 className='text-2xl'>May 2021 - July 2021</h2>
      </div>
      <ul className='text-left list-disc px-20 mt-10'>
        <li className='mb-3'>Collaborated with the development team to implement front-end design and functionality
        </li>
        <li className='mb-3'>Create website pages from Figma files, develop website’s store, buying, and payment flow for Hocthanhoc - website provides services and products about Theology and Spiritual, using NextJs, HTML, LESS, Ant Design
        </li>
        <li className='mb-3'>Develop Telekom Service Portal - Telekom corporation websites to sell their products using NextJs, Redux-Saga, Typescript,  HTML, LESS, Ant Design, GraphQL
        </li>
      </ul>
    </div>
  )
}

export default Hivetech