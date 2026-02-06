import React from 'react'
import "./Button.css"
const Button = ({className,value}) => {
  return (
    <button className={className}>{value}</button>
  )
}

export default Button