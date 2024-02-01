import React from 'react'
import axios from 'axios'
import Card from './Cards'
import Background from '../assets/background.jpg'
import { render } from 'react-dom'
const Home = () => {
    async function renderToShow(){
        window.location.href='/shows'
    }
   
  return (
       <div className='relative h-screen w-screen bg-transparent flex flex-col justify-center items-center'>
        <img src={Background} className='absolute top-0 left-0 w-full h-full z-0'/>
        <button onClick={renderToShow} className='btn bg-red-700 p-4 font-bold italic rounded-full z-10 text-2xl'>Welcome to Heflix</button>
     </div>
   
  )
}

export default Home