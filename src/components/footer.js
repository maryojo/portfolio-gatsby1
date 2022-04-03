import React from 'react'
import '../components/styles/layout.module.css'
// import {FacebookIcon} from 'gatsby-plugin-social9-socialshare'
import SocialIcons from './social-icons'

const Footer = () =>{
  return(
    <footer>
      <div>Copyright</div>
        <SocialIcons></SocialIcons>
    </footer>
  )
}

export default Footer