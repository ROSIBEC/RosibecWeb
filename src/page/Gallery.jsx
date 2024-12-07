import React from 'react'
import gal1 from '../assets/gal1.png'
import gal2 from '../assets/gal2.png'
import gal3 from '../assets/gal3.png'
import gal4 from '../assets/gal4.png'
import gal5 from '../assets/gal5.png'
import gal6 from '../assets/gal6.png'
import gal7 from '../assets/gal7.png'
import gal8 from '../assets/gal8.png'

const Gallery = () => {
  return (
    <section className='sections'>
        <div className='grid gap-10 sm:grid-cols-2'>
            <img src={gal1} alt="" className='rounded-[20px]'/>
            <img src={gal2} alt="" className='rounded-[20px]'/>
            <img src={gal3} alt="" className='rounded-[20px]'/>
            <img src={gal4} alt="" className='rounded-[20px]'/>
            <img src={gal5} alt="" className='rounded-[20px]'/>
            <img src={gal6} alt="" className='rounded-[20px]'/>
            <img src={gal7} alt="" className='rounded-[20px]'/>
            <img src={gal8} alt="" className='rounded-[20px]'/>
            {/* <img src={gallery1} alt="" className='rounded-[20px]'/> */}
            {/* <img src={gallery7} alt="" className='rounded-[20px]'/> */}
        </div>
    </section>
  )
}

export default Gallery