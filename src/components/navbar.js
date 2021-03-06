import React from 'react'
import { Link } from 'gatsby'
import {
  navLinks,
  navLinkItem,
  navLinkText,
  rightNavItems,
} from './styles/navbar.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'



const Navbar = () =>{
  return(
    <nav>
      <ul className={navLinks}>
        <li>
        <Link to="/">
          <StaticImage src="../images/logo.png" height={45}></StaticImage>
        </Link>
        </li>
        <div className={rightNavItems}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
          <FaChevronLeft fontWeight={12}/>
          Work
          <FaChevronRight/>
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/etc" className={navLinkText}>Etc.</Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/blog" className={navLinkText}>Blog</Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>Meet Me</Link>
        </li>
        <li>
          <Link to="/contact" className={navLinkText}>Contact</Link>
        </li>
        </div>
      </ul>
    </nav>
  )
} 

export default Navbar