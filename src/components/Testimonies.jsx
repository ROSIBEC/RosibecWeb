import React from 'react'
import { Testimony } from '../constant/data'
import { Link } from 'react-router-dom'

const Testimonies = () => {
  return (
    <section className='sections mb-5'>
        <h3 className='heading3 mt-10 pb-5 md:pb-12'>Testimonies</h3>
        <div className='grid md:grid-cols-2 gap-8'>
            {
                Testimony.map(testimony =>{
                    return(
                        <div key={testimony.title}>
                            <img src={testimony.img} alt={testimony.title}  className='rounded-[20px]'/>
                            <h4 className='heading4 pt-4'>{testimony.title}</h4>
                            <p className='my-3'>{testimony.text}</p>
                            <a href={testimony.href}><button type="button" className='button'>{testimony.doc}</button></a>
                            {/* <Link to={testimony.href}><button type="button" className='button'>{testimony.doc}</button></Link> */}
                        </div>
                    )
                })
            }
        </div>

        <div className='w-full flex max-sm:flex-col gap-8 mt-20'>
            <a href="/volunteer" className='w-full'><button type="button" className='button w-full'>Volunteer</button></a>
            <a href="/donate" className='w-full'><button type="button" className='button w-full'>Donate</button></a>
            {/* <Link to='/volunteer' className='w-full'></Link> */}
            {/* <Link to='/donate' className='w-full'><button type="button" className='button w-full'>Donate</button></Link> */}
        </div>
    </section>
  )
}

export default Testimonies

