import React, {useEffect} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'


const Effect = ({ children }) =>{
  useEffect(()=>{
    Aos.init({ duration: 2000})
  }, [])
  return(
    <div data-aos="fade-up">{children}</div>
  )
}

export default Effect