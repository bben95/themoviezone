import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import {updateDoc,doc,onSnapshot} from 'firebase/firestore'
import { db } from '../firebase';
import { MdHighlightOff } from "react-icons/md";

const SavedShows = () => {
    const[movies,setMovies]=useState([]);
    const{user}=UserAuth();
    
    useEffect(()=>{
        onSnapshot(doc(db,'users',`${user?.email}`),(doc)=>{
            setMovies(doc.data()?.savedShows)
        })
    },[user?.email])

    const slideLeft=()=>{
        let slider=document.getElementById('slider');
        slider.scrollLeft=slider.scrollLeft-500;
       }
   
       const slideRight=()=>{
           let slider=document.getElementById('slider');
           slider.scrollLeft=slider.scrollLeft+500;
          }

          const handleDelete= (id)=>{
            console.log(id)
           const newm= movies.filter((item)=>item.id!==id)
           setMovies(newm)
           
       const docRef = doc(db,'users',`${user?.email}`);
        updateDoc(docRef, {
    savedShows:newm
});

          }

          
    

  return (
    <>  
    <h2 className='text-white font-bold md:text-xl p-4'>My shows</h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft  onClick={slideLeft} size={40} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
        <div id={'slider'} className=" w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
           {movies?.map((item,id)=>(
            <div key={id} className='w-[160px]  md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' >
            <img src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} className="w-full h-auto block object-cover" />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white p-2">
                <p className='white-space-normal  w-[160px]  md:w-[240px] lg:w-[280px] text-xs md:text-sm font-bold flex justify-center h-full items-center text-ellipsis'>{item?.title}</p>
                <MdHighlightOff onClick={()=>{handleDelete(item.id)}} className='absolute top-4 right-4 text-gray-300 text-2xl'/>
                </div>
        </div>
           ))}
        </div>
        <MdChevronRight  onClick={slideRight} size={40} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
    </div>
    </>
  )
}

export default SavedShows