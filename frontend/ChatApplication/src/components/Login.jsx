import React from 'react'
import { MdKey } from "react-icons/md";
import MyInput from './MyInput';
import Button from './Button';
import {useNavigate} from 'react-router-dom'
const Login = () => {
     const navigate = useNavigate();
   
    const handleSubmit = async(e)=>{
        e.preventDefault()
         const formData = {
        Email : e.target[0].value,
        Password : e.target[1].value,
    }
    console.log(formData)
      try {
        await  fetch('http://localhost:8000/api/v1/users/login' ,{
          method : "POST",
          headers :{
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(formData),
         })
         .then(response => {
          if(!response.ok){
               console.log("RESPONSE WAS NOT OK" , response )
          }
         })
         navigate('/chat')
         console.log("user was found")
      } catch (error) {
        console.log("Could not find the user from frontend" , error.message)
      }
    }
  return (
    <>
    <div className='flex justify-center w-full h-screen items-center bg-[url("https://plus.unsplash.com/premium_photo-1720192861639-1524439fc166?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-no-repeat bg-cover bg-blend-overlay bg-gray-700'>
      <div className=' w-fit h-fit p-8 bg-blend-multiply text-white '>
       <span className='flex justify-center items-center gap-2'> <h1 className='text-5xl font-bold  text-center mb-4'>Login</h1><MdKey className='text-3xl mb-2'/></span>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5 items-center'>
              <MyInput label="Email" type="text" placeholder="Enter your Email" name="Email" className="px-3 py-2 outline none "/>
              <MyInput label="Password" type="password" placeholder="Enter your Password" name="Password" className="px-3 py-2 outline none "/>
              <Button type="submit" className='w-fit h-fit px-3 py-2 bg-purple-800 hover:scale-105 transition-all text-white rounded-md hover:bg-white hover:text-purple-600 hover:ring-1 hover:ring-purple-text-purple-600'>Login</Button>
          </form>
      </div>

    </div>
    </>
  )
}

export default Login