import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between p-4 z-[100] absolute'>
        <h1 className='text-red-600 text-2xl md:text-4xl  font-bold cursor-pointer'>MOVIEZONE</h1>
        <div>
            <button className='text-white pr-4  text-lg'>Sign In</button>
            <motion.button whileTap={{scale:0.75}} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-lg text-white focus:'>Sign Up</motion.button>
        </div>
        
    </div>
  )
}

export default Navbar