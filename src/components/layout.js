// /**
//  * Layout component that queries for data
//  * with Gatsby's useStaticQuery component
//  *
//  * See: https://www.gatsbyjs.com/docs/use-static-query/
//  */

// import * as React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
// import "./layout.css"

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//         }}
//       >
//         <main>{children}</main>
//         <footer
//           style={{
//             marginTop: `2rem`,
//           }}
//         >
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.com">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout

import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  container,
  heading, 
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
 } from './layout.module.css'

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
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>About</Link>
          </li>
          <li className={navLinkItem}>
          <Link to="/blog" className={navLinkText}>My Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout