import * as React from 'react'
import { gridLayout } from './styles/layout.module.css'


const GridLayout = ({children}) =>{
  return(
    <div className={gridLayout}>
      {children}
    </div>
  )
}

export default GridLayout
