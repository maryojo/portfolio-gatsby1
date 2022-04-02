import * as React from 'react'
// import './styles/button.module.css'

const Button = ({buttonType, buttonAction}) =>{
  return(
    <button className={buttonType}>
      Click Me!
    </button>
  )
}

export default Button