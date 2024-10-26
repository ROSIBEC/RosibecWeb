import React from 'react'
import { Testimony } from '../constant/data'

const Testimonies = () => {
  return (
    <section className='sections'>
        <h3 className='heading3 pb-12'>Testimonies</h3>
        <div className='grid md:grid-cols-2 gap-8'>
            {
                Testimony.map(testimony =>{
                    return(
                        <div>
                            <img src={testimony.img} alt="" />
                            <h4 className='heading4 pt-4'>{testimony.title}</h4>
                            <p className='my-3'>{testimony.text}</p>
                            <button type="button" className='button'>Read more</button>
                        </div>
                    )
                })
            }
        </div>

        <div className='w-full flex gap-8 mt-20'>
            <button type="button" className='button w-full'>Volunteer</button>
            <button type="button" className='button w-full'>Donate</button>
        </div>
    </section>
  )
}

export default Testimonies