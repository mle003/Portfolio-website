import React, { useState } from "react";
import iHanpu from '../images/hanpu.png'
import iBenit from '../images/benit.png'
import iHivetech from '../images/hivetech.png'
import iSuny from '../images/plattsburgh.png'
import Hanpu from "../components/Exp-components/Hanpu";
import Benit from "../components/Exp-components/Benit";
import Hivetech from "../components/Exp-components/Hivetech";
import Suny from "../components/Exp-components/Suny";

const Experience = () => {
  const [show, setShow] = useState(1)
  return (
    <div id='experience' style={{ backgroundColor: '#122b50' }} className='mt-20 text-left px-48 text-white'>
      <h1 className='mb-10 text-2xl font-bold text-white'>Experience</h1>
      <div className='flex text-center justify-center bg-white p-3 text-black mx-48 rounded-full'>
        {show === 1 ? (
          <p onClick={() => setShow(1)} className='flex items-center mr-7 cursor-pointer bg-blue-300 rounded-full p-3'><img src={iHanpu} alt='Hanpu Technology' height={50} width={50} /> <span className='font-bold'>Hanpu Technology</span></p>
        ) : (
          <p onClick={() => setShow(1)} className='flex items-center mr-7 cursor-pointer p-3'><img src={iHanpu} alt='Hanpu Technology' height={50} width={50} /> <span className='font-bold'>Hanpu Technology</span></p>
        )}
        {show === 2 ? (
          <p onClick={() => setShow(2)} className='flex items-center mr-7 cursor-pointer bg-blue-300 rounded-full p-3'><img src={iBenit} alt='Benit' height={50} width={60} /> <span className='ml-1 font-bold'>Benit</span></p>
        ) : (
          <p onClick={() => setShow(2)} className='flex items-center mr-7 cursor-pointer p-3'><img src={iBenit} alt='Benit' height={50} width={60} /> <span className='ml-1 font-bold'>Benit</span></p>
        )}
        {show === 3 ? (
          <p onClick={() => setShow(3)} className='flex items-center mr-7 cursor-pointer bg-blue-300 rounded-full p-3'><img src={iHivetech} alt='HiveTech' height={50} width={50} /> <span className='font-bold'>HiveTech</span></p>
        ) : (
          <p onClick={() => setShow(3)} className='flex items-center mr-7 cursor-pointer p-3'><img src={iHivetech} alt='HiveTech' height={50} width={50} /> <span className='font-bold'>HiveTech</span></p>
        )}
        {show === 4 ? (
          <p onClick={() => setShow(4)} className='flex items-center cursor-pointer bg-blue-300 rounded-full p-3'><img src={iSuny} alt='SUNY Plattsburgh' height={50} width={50} /> <span className='font-bold ml-1'>SUNY Plattsburgh</span></p>
        ) : (
          <p onClick={() => setShow(4)} className='flex items-center cursor-pointer p-3'><img src={iSuny} alt='SUNY Plattsburgh' height={50} width={50} /> <span className='font-bold ml-1'>SUNY Plattsburgh</span></p>
        )}
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