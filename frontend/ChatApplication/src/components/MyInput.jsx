import React from 'react'

const MyInput=({
  label,placeholder,type,className
}) =>{
  return (
    < >
<div >

    {
      label ? <label className=' mr-3 font-bold text-xl'>{label} :</label> : null
    }
    <input required   className={` ${className}   outline-none focus:ring-1 focus:ring-slate-400  text-white bg-transparent hover:border-b-2 hover:border-slate-700 font-medium`} type={type}  placeholder={placeholder}/>
    
</div>
    </>
   
  )
}

export default MyInput