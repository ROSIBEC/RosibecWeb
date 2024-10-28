import { SectionIcon } from 'lucide-react'
import React from 'react'
import Contact from '../components/Contacting'
import Footer from '../components/Footer'

const Donate = () => {
  return (
    <section className='sections'>
        <div className='md:my-10 max-sm:mb-5 rounded-[16px]  bg-donateHeader h-[200px] md:h-[500px] flex items-center justify-center bg-cover bg-no-repeat'>
            <h2 className='bgHeaderText'>Donate</h2>
        </div>
        <Contact/>
        <Footer/>
    </section>
  )
}

export default Donate