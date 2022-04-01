import * as React from 'react'
import { Link } from 'gatsby'
import {
  navLinks,
  navLinkItem,
  navLinkText,
} from './navbar.module.css'



const Navbar = () =>{
  return(
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>Projects</Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/work/index" className={navLinkText}>Work</Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/blog" className={navLinkText}>Blog</Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>Meet Me</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
} 

export default Navbar