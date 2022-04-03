import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import AudioElement from '../components/audio-element'
import {
  aboutSection,
  displayPicture
} from '../components/styles/about.module.css'
// import Button from '../components/button'
// import {secondaryButton} from '../components/styles/button.module.css'

const AboutPage = () => {
  return (
   <Layout pageTitle="About">
      <p>Hi there, I'm Mary!</p>
      <section className={aboutSection}>
        <StaticImage src="../images/instadp.png" className={displayPicture}/>
        <div>
          <h2>I'm not your usual</h2>
          <p>Hi there! It's Mary. I love to design and </p>
          <p>Hearing me introduce myself sounds so much better. Listen here</p>
          <AudioElement/>
        </div>
      </section>
      {/* <Button buttonType={secondaryButton}></Button> */}
   </Layout>
  )
}

export default AboutPage