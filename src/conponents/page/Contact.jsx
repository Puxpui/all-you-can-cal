import React from 'react'
import Layout from '../Layout'
import { mydiscord, clear } from './calculator/discord'

function Contact() {
  return (
    <Layout>
      <div className='select-none flex justify-center mt-40 font-ctfont font-semibold w-90 text-gray-700 text-xl'>
        <p>Would you like to contact me?</p>
      </div>
      <div className='flex justify-center mt-10 gap-10'>
        <div className="avatar w-24 h-24 btn border border-transparent hover:border-transparent shadow-transparent">
          <div className="w-24 select-none">
            <a onClick={clear} href="https://www.facebook.com/puxpui" target="_blank"><img src="https://i.imgur.com/RCWFfrX.png" alt="" /></a>
          </div>
        </div>
        <div className="avatar w-24 h-24 btn border border-transparent hover:border-transparent shadow-transparent">
          <div className="w-24 select-none">
            <a onClick={mydiscord}><img src="https://i.imgur.com/nStNC9E.png" alt="" /></a>
          </div>
        </div>
        <p id='showmydiscord' className='absolute mt-[10%] text-gray-700 font-ctfont font-semibold text-xl'></p>
        <div className="avatar w-24 h-24 btn border border-transparent hover:border-transparent shadow-transparent">
          <div className="w-24 select-none">
            <a onClick={clear} href="mailto:pukpuidesu666@gmail.com" target="_blank"><img src="https://i.imgur.com/uDV7Wbi.png" alt="" /></a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
