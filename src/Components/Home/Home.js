
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Services from '../Services/Services'
import Clients from '../Clients/Clients'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'
import Order from '../Order/Order'
import Static from '../Static/Static'
import ClientsSection from '../Clients'

function Home() {
  return (
    <div className='App'>
       
        <Hero />
        <Static />
        <About />
        <Services />
        <ClientsSection />
        <Clients />
        <Contact />
        
        <Footer />
    </div>
  )
}

export default Home