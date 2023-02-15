import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  
  return (
    <>
    <div className='w-full h-screen'>
      <img 
      className='hidden md:block absolute w-full h-full object-cover'
      src="https://assets.nflxext.com/ffe/siteui/vlv3/3d6cf7c4-ad17-457a-b6cf-ea952926ba74/54a0de92-feb4-4891-8cb3-00a794ec89f6/IN-en-20230206-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
      <div className='bg-black/60 fixed top-0 w-full h-screen'></div>
      <div className='fixed w-full px-3 py-20 z-50'>
        <div className='max-w-[400px] h-[500px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-14'>
            <h1 className='text-3xl font-bold '>Sign In</h1>
            <form className='w-full flex flex-col py-4' >
               <input className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email'  />
                <input className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password'  autoComplete='current-password'  />
                <button className='bg-red-600 py-3 my-4 rounded font-bold'>Sign In</button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p> <input type="checkbox"className='mr-2' />Remember me</p>
                  <p>Need Help?</p>
                </div>
                <p className='py-6 '> <span className='text-gray-600'>New to Moviezone?</span> <Link to='/signup'>Sign Up</Link>  </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login