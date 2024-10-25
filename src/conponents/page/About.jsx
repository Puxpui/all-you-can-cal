import React from 'react'
import Layout from '../Layout'

function About() {
    return (
        <Layout>
        <div className='select-none flex justify-center mt-40 font-ctfont font-semibold w-90 text-gray-700 text-xl'>
            <p>This project is made with React, Tailwind CSS, and DaisyUI for <br /> BorntoDev's certificate and focuses on learning about web development.</p>
            <div className='text-sm absolute mt-14 ml-[45%]'>- Pui</div>
            <a className='absolute mt-[10%]' href="https://github.com/Puxpui" target='_blank'>Github</a>
        </div>
    </Layout>
    )
}

export default About
