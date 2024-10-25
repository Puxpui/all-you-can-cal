import React from 'react'

function Background() {
  return (
    <div className='absolute top-0 left-0 w-full h-full -z-10 select-none'>
      <img
        src="https://i.imgur.com/umNmk4r.png"
        alt="background"
        className='w-full h-full object-cover'
      />
    </div>
  )
}

export default Background
