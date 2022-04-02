import * as React from 'react'
import Layout from '../components/layout'
import GridLayout from '../components/grid-layout'
import Card from '../components/card'
import { dynamicIntro } from '../components/styles/work.module.css'

const IndexPage = () => {
  return (
   <Layout pageTitle="Homepage">
    <section>
      <h1>Nice to have you here!</h1>
      <p>I love to <span className={dynamicIntro}>design</span> interfaces</p>
      <p>I am currently working on <span className={dynamicIntro}>this</span></p>
    </section>
    <GridLayout>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </GridLayout>
   </Layout>
  )
}

export default IndexPage