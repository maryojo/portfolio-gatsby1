import * as React from 'react'
import Layout from '../components/layout'
import Button from '../components/button'
import {secondaryButton} from '../components/styles/button.module.css'

const AboutPage = () => {
  return (
   <Layout pageTitle="About">
      <p>Hi there, I'm Mary!</p>
      <Button buttonType={secondaryButton}></Button>
   </Layout>
  )
}

export default AboutPage