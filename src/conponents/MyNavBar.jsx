import React from 'react';
import { Link } from 'react-router-dom';

function MyNavBar() {
  return (
    <nav className='bg-opacity-0 p-4 w-full flex justify-center font-ctfont select-none'>
      <div className='flex gap-12'>
        <Link to="/" className='text font-semibold text-lg text-black'>Home</Link>
        <Link to="/About" className='text font-semibold text-lg text-black'>About</Link>
        <Link to="/Contact" className='text font-semibold text-lg text-black'>Contact</Link>
      </div>
    </nav>
  );
}

export default MyNavBar;
