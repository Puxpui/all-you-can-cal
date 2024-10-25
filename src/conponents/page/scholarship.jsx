import React from 'react'
import Layout from '../Layout';
import { savelistprice, calculateTotal, clearsave } from './calculator/scholarcal';

function Scholarship() {
  return (
    <Layout>
      <div className='flex justify-center font-ctfont font-semibold w-90 text-gray-700 box-border'>
        <div className='flex justify-center absolute mr-60'>
          <p className='mb-2 text-sm mt-20'>รายการค่าใช้จ่าย</p>
        </div>
        <div className='flex justify-center absolute ml-60'>
          <p className='mb-2 text-sm mt-20'>จำนวนเงิน (บาท)</p>
        </div>
        <div className='flex mt-28 gap-4'>
          <input type="text" id='listInput' className="[&::-webkit-inner-spin-button]:appearance-none text-black rounded-full border-2 border-violet-300 focus:border-violet-300 input w-full max-w-xs bg-opacity-0 focus:outline-none" />
          <input type="number" id='priceInput' className="[&::-webkit-inner-spin-button]:appearance-none text-black rounded-full border-2 border-violet-300 focus:border-violet-300 input w-full max-w-xs bg-opacity-0 focus:outline-none" />
        </div>
        <div className='flex justify-center items-center absolute mt-40'>
          <button onClick={savelistprice} id='savelist' className='h-8 px-4 border-2 bg-white bg-opacity-50 border-opacity-50 border-black m-2 text-base rounded-full select-none'>บันทึกรายการ</button>
          <button onClick={calculateTotal} id='calbutton' className='h-8 px-4 border-2 bg-white bg-opacity-50 border-opacity-50 border-black m-2 text-base rounded-full select-none'>คำนวน</button>
        </div>
        <div className='absolute mt-[15%] bg-base-100 bg-opacity-55 rounded-lg w-[30%] h-[50%]'>
          <p className='p-4 pb-0 flex justify-center'>รายการค่าใช้จ่าย</p>
          <div className="relative pt-4 pb-2">
            <div id='listshow' className="absolute left-[10%]"></div>
            <div id='priceshow' className="absolute right-[10%]"></div>
          </div>
          <div id='lasttotal' className="flex justify-center mt-[45%] text-lg font-bold"></div>
          <div id='yeartotal' className="flex justify-center text-lg font-bold"></div>
          <div id='sarup' className="flex justify-center text-lg font-bold"></div>
          <div className='flex justify-center '>
          <button onClick={clearsave} className='items-center h-8 px-4 border-2 bg-white bg-opacity-55 border-opacity-0 border-black m-2 text-base rounded-full select-none'>ล้างค่า</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Scholarship
