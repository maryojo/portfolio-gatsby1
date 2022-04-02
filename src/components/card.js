import * as React from 'react'
import { card } from './styles/card.module.css'
import { Link } from 'gatsby'

const Card = ({data}) =>{
  // the card has to have dynamic parameters.i.e. data, 
  return(
    <div>
      <div className={card}>logo</div>
      <Link to="/"></Link>
    </div>
  )
}

export default Card