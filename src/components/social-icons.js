import React from "react";
import { FaBehance, FaGithubAlt, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { socialIcons,
  socialIconItem,
}  from './styles/layout.module.css'


const SocialIcons = () =>{
  return(
    <ul className={socialIcons}>
      <li >
        <a href="https://www.twitter.com/maryojo_mo" className={socialIconItem}>
          <FaBehance size="20px"/>
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com/maryojo_mo" className={socialIconItem}>
          <FaGithubAlt size="20px"/>
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com/maryojo_mo" className={socialIconItem}>
          <FaTwitter size="20px"/>
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com/maryojo_mo" className={socialIconItem}>
          <FaLinkedin size="20px"/>
        </a>
      </li>
    </ul>
  )
}

export default SocialIcons