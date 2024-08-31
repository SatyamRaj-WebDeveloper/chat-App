import React from 'react'
import Button from './Button'
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
const HeroSection = ({className}) => {
  
  return (
    <>
    <div className={`${className}`}>
    <div className='w-full h-screen  bg-[url("https://img.freepik.com/premium-photo/digital-communication-smartphone-chat-bubble_1135715-12207.jpg?w=1060")] text-center flex flex-col bg-no-repeat bg-cover text-white bg-blend-overlay bg-gray-500 items-center justify-center'>
       <h1 className='text-xl sm:text-4xl font-serif m-4  font-bold text-cyan-400'>Welcome To The Chat Application</h1>
       <h3 className='text-md font-medium'>Connect , Communicate , Collaborate</h3>
       <div className='mt-8 text-center mx-4 '>
       <p>Join A Community of Users And enjoy Seamless Communication</p>
       <p>Real-Time Messaging , Secure Connections and More </p>
       </div>

       <div className='sm:text-wrap mx-4 mt-8 sm:text-lg flex flex-col  items-center'>
        <p>"Chat Application is designed to make communication easy and fun. Whether you're chatting with friends, family, or coworkers, our app provides all the tools you need to stay connected."</p>
        <p>"Our mission is to bring people together through simple, secure, and efficient communication."</p>
        <NavLink to={'/SignUp'} className={'px-3 py-2  bg-green-400 text-white font-semibold text-md hover:bg-white hover:text-green-600 w-fit h-fit flex items-center gap-3 hover:ring-1 hover:ring-green-600 mt-10'}>Get Started<FaArrowRightLong /></NavLink>
       </div>
        
       
    </div>
    </div>
    

    </>
  )
}

export default HeroSection