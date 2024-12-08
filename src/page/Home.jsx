import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Impacted from '../components/Impacted'
import Project from '../components/Project'
import Testimonies from '../components/Testimonies'
import Contact from '../components/Contacting'
import Footer from '../components/Footer'
import { useEffect } from 'react'

const Home = () => {
  useEffect (()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <section className=''>
        
        <Header/>
        <Impacted/>
        <Project/>
        <Testimonies/>
        <Contact/>
        <Footer/>
    </section>
  )
}

export default Home;