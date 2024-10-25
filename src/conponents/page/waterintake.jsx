import React from 'react';
import Layout from '../Layout';
import { warterCal } from './calculator/wartercal';

const WaterIntake = () => {
  const showwatercalresult = () => {
    const messageElement = document.getElementById('message');
    const message = warterCal();
    messageElement.innerText = message;
  };

  return (
    <Layout>
      <div className='flex justify-center font-ctfont font-semibold'>
        <div className='flex flex-col mt-28'>
          <p className='mb-2 text-sm'>น้ำหนักตัวของคุณ (กิโลกรัม)</p>
          <input type="number" id='weightInput' className="[&::-webkit-inner-spin-button]:appearance-none text-black rounded-full border-2 border-violet-300 focus:border-violet-300 input w-full max-w-xs bg-opacity-0 focus:outline-none" />
          <div className='flex justify-center'>
            <button onClick={showwatercalresult} id='calbutton' className='h-8 px-4 border-2 bg-white bg-opacity-50 border-opacity-50 border-black m-2 text-base rounded-full select-none'>คำนวน</button>
          </div>
        </div>
        <div id="message" className="absolute mt-[18%] text-xl text-gray-700"></div>
      </div>
    </Layout>
  );
};

export default WaterIntake;
