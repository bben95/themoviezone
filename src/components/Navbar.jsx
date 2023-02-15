import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between p-4 z-[100] absolute'>
      <Link to='/'>
      <h1 className='text-red-600 text-2xl md:text-4xl  font-bold cursor-pointer'>MOVIEZONE</h1>
      </Link>
        
        <div>
          <Link to='/login'>
          <button className='text-white pr-4  text-lg'>Sign In</button>
          </Link>
          <Link to='/signup'>
          <motion.button whileTap={{scale:0.75}} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-lg text-white focus:'>Sign Up</motion.button>
          </Link>
            
        </div>
        
    </div>
  )
}

export default Navbar