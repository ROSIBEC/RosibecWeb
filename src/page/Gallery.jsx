import React from 'react'
import gallery1 from '../assets/gallery1.svg'
import gallery7 from '../assets/gallery7.svg'

const Gallery = () => {
  return (
    <section className='sections'>
        <div className='grid gap-10 sm:grid-cols-2'>
            <img src={gallery1} alt="" className='rounded-[20px]'/>
            <img src={gallery7} alt="" className='rounded-[20px]'/>
            <img src={gallery1} alt="" className='rounded-[20px]'/>
            <img src={gallery7} alt="" className='rounded-[20px]'/>
            <img src={gallery1} alt="" className='rounded-[20px]'/>
            <img src={gallery7} alt="" className='rounded-[20px]'/>
            <img src={gallery1} alt="" className='rounded-[20px]'/>
            <img src={gallery7} alt="" className='rounded-[20px]'/>
            <img src={gallery1} alt="" className='rounded-[20px]'/>
            <img src={gallery7} alt="" className='rounded-[20px]'/>
        </div>
    </section>
  )
}

export default Gallery