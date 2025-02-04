import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import TheExmedia from '../components/TheExmedia'
import Footer from '../components/Footer'
import Deliverables from '../components/Deliverables'

function Home() {
  return (
    <div className=' '>
      <Navbar />
      <Hero />
      <Services />

      <Deliverables />
      <TheExmedia />
      <Footer />
    </div>
  )
}

export default Home
