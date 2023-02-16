import React from 'react'
import { motion } from 'framer-motion'
import { Link ,useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const {user,logOut}=UserAuth();
  const navigate=useNavigate();

  const handleLogout=async ()=>{
    try {
      await logOut();
      navigate('/')
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='w-full flex items-center justify-between p-4 z-[100] absolute'>
      <Link to='/'>
      <h1 className='text-red-600 text-xl md:text-4xl  font-bold cursor-pointer'>MOVIEZONE</h1>
      </Link>
        
       {user?.email ?(
        <div>
        <Link to='/account'>
        <button className='text-white pr-4  text-base md:text-lg'>Account</button>
        </Link>
        
        <motion.button whileTap={{scale:0.75}} onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-base md:text-lg text-white focus:'>Logout</motion.button>
        
          
      </div>
       ):(
        <div>
        <Link to='/login'>
        <button className='text-white pr-4 text-base md:text-lg'>Sign In</button>
        </Link>
        <Link to='/signup'>
        <motion.button whileTap={{scale:0.75}} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-base md:text-lg text-white focus:'>Sign Up</motion.button>
        </Link>
          
      </div>
       )}
        
        
    </div>
  )
       }

export default Navbar