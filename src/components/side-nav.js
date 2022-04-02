import * as React from 'react'
import { Link } from 'gatsby'

const SideNav = () =>{
  return(
    <nav>
      <ul>
        <li>
          <Link to="./case-study-cover.js">Introduction</Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideNav