import React from 'react'
import io from 'socket.io-client'
import { useState , useEffect } from 'react';
import { IoMdPersonAdd } from "react-icons/io";
import Button from './Button'
import { AiOutlineCloseCircle } from "react-icons/ai";


const socket = io.connect("http://localhost:5000")

const ChatArea = () => {
  const [message , setmessage] = useState('');
  const [chats , setchats] = useState([]);
  const [Add , setAdd] = useState(false)
  
   const sendchat = (e)=>{
    e.preventDefault();
    socket.emit('chat' , {message})
    setmessage('')
   }
  useEffect(()=>{
    socket.on('chat',(payload)=>{
      setchats([...chats,payload])
    })
  }) 

  const handleSubmit= async(e)=>{
    e.preventDefault();
    const userId = '66d1efd71bf38575252dbd9b';
    const formData = {
        FullName : e.target[0].value,
        Phone : e.target[1].value,
    }
    try {
  await fetch(`http://localhost:8000/api/v1/users/addfriend/${userId}` ,{
        method : 'POST' ,
        headers :{
          "Content-Type" :"application/json"
        },
        body : JSON.stringify(formData)
      })
      setAdd(false)
      console.log("Friend Saved Successfully from frontend")
    } catch (error) {
      console.log("Error occured in frontend during saving a friend" , error.message)
    } 
  }
  
  return (
    <>
    <div className='flex h-screen relative'>
        <div className='sm:w-[30%] h-10 flex justify-between items-center px-4 bg-gray-500 w-[40%]'>
           <h1 className='text-xl  font-semibold py-2 px-1 text-white '>Chats</h1>
           <IoMdPersonAdd onClick={()=>{setAdd(prev=>!prev)}} className='text-2xl cursor-pointer text-white '/>
        </div>
        <div className='border border-gray-600 '></div>
        <div className='w-[70%] bg-[url("https://img.freepik.com/free-vector/social-media-background-with-hand-drawn-elements_23-2147815826.jpg?t=st=1725006028~exp=1725009628~hmac=6523c46e4dff4ccda74a5804325304fcd4dd20f18e252e8e83dfc7e66b5d6fd1&w=740")] bg-no-repeat bg-blend-multiply bg-gray-500 relative bg-cover '>
        {
          chats.map((payload,index)=>{
            return(
              <p className=' rounded-xl bg-white text-2xl text-slate-700 w-fit h-fit px-4 py-3 border border-white mt-3' key={index}>{payload.message}</p>

            )
          })
        }
            <form className='flex justify-between items-center '>
          <input type="text" value={message} onChange={(e)=>{
            setmessage(e.target.value)
          }}  className='w-[95%] text-black font-medium absolute top-[92%] py-2 px-3 outline-none border border-gray-500 '  placeholder='Write A Message'/>
          <button onClick={sendchat}className='absolute left-[93%] top-[94%] w-fit h-fit px-3 py-2 bg-white rounded-md' title='send'>
             send
          </button>
            </form>
   
        </div>
    </div>
    {Add && <div className='sm:w-fit  p-10 h-80 absolute top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%] bg-slate-300 '>
      <div className='flex relative  '>
      <AiOutlineCloseCircle onClick={()=>setAdd(false)}className='cursor-pointer absolute top-0 right-0  text-2xl' />
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-3 '>
          <div className=' flex sm:flex-row flex-col justify-center items-center'>
        <label className="text-xl font-bold text-gray-600 w-28">FullName : </label>
        <input type="text" className='px-3 outline-none py-2 hover:border-2 hover:border-b-slate-400 ml-2 text-lg font-semibold focus:ring-1 focus:ring-gray-500' placeholder='Enter Full Name' />
          </div>
          <div className=' flex sm:flex-row flex-col justify-center items-center'>
        <label className="text-xl font-bold text-gray-600">Phone : </label>
        <input type="text" className='px-3 outline-none py-2 hover:border-2 hover:border-b-slate-400 ml-2 text-lg font-semibold focus:ring-1 focus:ring-gray-500' placeholder='Enter the Phone Number ' />
          </div>
        </div>
        <div className='flex items-center justify-center mt-5'>

        <Button type="submit" className='w-fit h-fit px-3 py-2 bg-violet-600 text-white rounded-lg hover:text-violet-600 hover:ring-1 hover:ring-violet-600 transition-all hover:scale-105 hover:bg-white'>Add </Button>
        </div>
      </form>
      <p className='text-lg text-center  mt-8 font-semibold'>"Connect To your Friends for seamless Chatting"</p>
    </div>}
    </>
  )
}

export default ChatArea