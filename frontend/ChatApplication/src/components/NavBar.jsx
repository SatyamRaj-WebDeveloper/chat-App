import React, { useState } from 'react'
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { NavLink  } from 'react-router-dom';

const NavBar = () => {
  
   const [Clicked , setClicked] = useState(false)
 
  return (
    <>
     <div className='w-full h-14 bg-green-400 text-white px-8  font-semibold text-lg'>
         <div className='flex justify-between items-center sm:py-0 py-4'>
            <h1 className='text-xl font-bold mb-5  flex items-center gap-2'>Quick Chat <HiOutlineChatAlt2 className='text-xl font-bold' /></h1>

            <IoMenu className='relative sm:hidden flex text-2xl mb-5 ' onClick={()=>setClicked(prev => !prev)}/>
              {
                Clicked &&  <div className='bg-white sm:hidden absolute right-10 top-10 text-black text-lg font-bold w-36 h-20 flex flex-col rounded-lg px-5 py-2 gap-2 '>
                <NavLink to={'/SignUp'} className='hover:underline'>SignUp</NavLink>
                <NavLink to={'/login'} className='hover:underline'>Login</NavLink>
             </div>
              }
           
            <ul className='mb-5 sm:flex gap-4 justify-between w-fit p-4 h-auto hidden '>
            
                <NavLink to={'/Signup'} className={' hover:underline hover:text-white'} >SignUp</NavLink>
                <NavLink to={'/login'}  className={' hover:underline hover:text-white'}>Login</NavLink>
            </ul>
         </div>
        
     </div>
    </>
  )
}

export default NavBar