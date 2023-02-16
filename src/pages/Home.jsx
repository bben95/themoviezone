import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'
import { UserAuth } from '../context/AuthContext'



const Home = () => {
  const {error}= UserAuth();
  return (
    <div>
        <Main/>
         <Row rowID='1' title= "Upcoming"  fetchURL={requests.requestUpcoming}/>
         <Row rowID='2' title= "Popular"  fetchURL={requests.requestPopular}/>
         <Row rowID='3' title= "Trending"  fetchURL={requests.requestTrending}/>
         <Row rowID='4' title= "Top Rated"  fetchURL={requests.requestTopRated}/>
         <Row rowID='5' title= "Horror"  fetchURL={requests.requestHorror}/>
         {error && <div className='w-full h-full flex justify-center'> <p className="fixed top-10 bg-red-700 text-base md:text-lg z-50 px-4 py-2 rounded text-white font-semibold" >Login to save the movie</p></div> }
    </div>
  )
}

export default Home