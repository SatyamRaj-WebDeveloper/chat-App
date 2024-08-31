import React, { Children } from 'react'

const Button = ({
    className ,
    children
}) => {
  return (
   <>
    <button className={`${className}`} >{children}
       </button>
   </>
  )
}

export default Button