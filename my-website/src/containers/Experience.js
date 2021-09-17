import React, { useState } from "react";
import Hanpu from "../components/Exp-components/Hanpu";
import Benit from "../components/Exp-components/Benit";
import Hivetech from "../components/Exp-components/Hivetech";
import Suny from "../components/Exp-components/Suny";

const Experience = () => {
  const [show, setShow] = useState(1)
  return (
    <div style={{ backgroundColor: '#122b50' }} className='mt-20 text-left px-48 text-white'>
      <h1 className='mb-10 text-2xl font-bold text-white'>Experience</h1>
      <div className='flex text-center justify-center bg-white p-3 text-black mx-48 rounded-full'>
        <p onClick={() => setShow(1)} className='flex items-center mr-7 cursor-pointer'><img src='/images/hanpu.png' alt='Hanpu Technology' height={50} width={50} /> <span className='font-bold'>Hanpu Technology</span></p>
        <p onClick={() => setShow(2)} className='flex items-center mr-7 cursor-pointer'><img src='/images/benit.png' alt='Benit' height={50} width={60} /> <span className='ml-1 font-bold'>Benit</span></p>
        <p onClick={() => setShow(3)} className='flex items-center mr-7 cursor-pointer'><img src='/images/hivetech.png' alt='HiveTech' height={50} width={50} /> <span className='font-bold'>HiveTech</span></p>
        <p onClick={() => setShow(4)} className='flex items-center cursor-pointer'><img src='/images/plattsburgh.png' alt='SUNY Plattsburgh' height={50} width={50} /> <span className='font-bold ml-1'>SUNY Plattsburgh</span></p>
      </div>
      <div className='text-center'>
        {show === 1 && (
          <Hanpu />
        )}
        {show === 2 && (
          <Benit />
        )}
        {show === 3 && (
          <Hivetech />
        )}
        {show === 4 && (
          <Suny />
        )}
      </div>
    </div>
  )
}

export default Experience