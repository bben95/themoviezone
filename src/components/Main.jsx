import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';
import { motion } from 'framer-motion';

const Main = () => {
    const [movies,setMovies]=useState([]);
    
    useEffect(()=>{
        axios.get(requests.requestPopular).then((res)=>{
            setMovies(res.data.results);
        })
    },[])
    const movie= movies[Math.floor(Math.random() * movies.length)]

  return (
    <div className='w-full h-full text-white '>
        <div className='w-full h-[550px]  relative'>
            <div className='absolute w-full h-full bg-gradient-to-r from-black'></div>
            <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} className="w-full h-full object-cover" />
            <div className='absolute w-full h-1/2 top-1/2 p-4 md:p-8 flex flex-col gap-4 '>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
            <div className='flex gap-4'>
                <motion.button whileTap={{scale:0.6}} className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</motion.button>
                <motion.button whileTap={{scale:0.6}} className='border text-white border-gray-300 py-2 px-5'>Watch Later</motion.button>
            </div>
            <p className='text-gray-400 text-sm'>Released:{movie?.release_date}</p>
            <p className='w-full md:max-w-md lg:max-w-lg xl:max-w-xl text-gray-200 text-ellipsis line-clamp-4 md:line-clamp-2'>{movie?.overview}</p>
        </div>

        </div>
    </div>
  )
}

export default Main