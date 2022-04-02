import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { 
  container,
  heading, 
  siteTitle,
 } from './styles/layout.module.css'
import "@fontsource/dm-sans"
import Navbar from './navbar'
import Footer from './footer'


const Layout = ({pageTitle, children}) =>{
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
  return(
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      {/* <header className={siteTitle}>{data.site.siteMetadata.title}</header> */}
      <Navbar></Navbar>
      <main>
        {/* <h1 className={heading}>{pageTitle}</h1> */}
        {children}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout