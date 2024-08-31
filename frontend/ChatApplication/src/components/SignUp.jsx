import React from 'react';
import MyInput from './MyInput';
import Button from './Button';
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const SignUp = ({className}) => {
  const navigate = useNavigate()
   const handleSubmit = (e)=>{
    console.log(e)
     e.preventDefault()
     const formData = {
      FullName: e.target[0].value,
      Email: e.target[1].value,
      Password: e.target[2].value,
    }
     console.log(formData)
     try {
      fetch('http://localhost:8000/api/v1/users/signup',{
        method : 'POST',
        headers :{
          "Content-Type" : "application/json",
      },
       body : JSON.stringify(formData),
      } ).then(response =>{
        if(!response.ok){
          console.log("did not register" , response)
        }
      })
      navigate('/chat')
     } catch (error) {
      console.log('error encountered' , error.message)
     }
   }
  return (
    <>
    <div className='w-full h-screen bg-[url("https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg?w=996&t=st=1725005762~exp=1725006362~hmac=c80de938a219b041a26b0d9283a651c4e9c9ba8ce0446a127df6f2de47e57837")] text-white flex justify-center items-center bg-blend-overlay  bg-no-repeat bg-cover '>
    <div className='text-center  p-10 bg-transparent' >
        <h1 className='text-4xl font-bold mb-8'>SignUp</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 justify-center items-center'>
        <MyInput label="FullName" type="text" name="FullName" placeholder="Enter Your FullName" className='px-3 py-2'/>
         <MyInput label="Email" type="email" name="Email" placeholder="Enter Your Email" className='px-3 py-2'/>
         <MyInput label="Password" type="password" name="Password" placeholder="Enter Your Password" className='px-3 py-2'/>
        
         <span>Already have an Account? <NavLink  to={'/login'}className='text-green-300 hover:underline cursor-pointer  '>login</NavLink></span>
          <Button type='submit' className='bg-white w-fit h-fit px-3 py-2 text-md font-semibold text-black rounded-md hover:text-white hover:bg-slate-900 flex items-center gap-2 '>Submit<FaArrowRightLong/></Button>
        </form>
    </div>

    </div>
    </>
  )
}

export default SignUp