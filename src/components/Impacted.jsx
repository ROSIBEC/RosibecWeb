import React from 'react'
import { Impact } from '../constant/data'

const Impacted = () => {
  return (
    <section className='md:sections my-10'>
        <h3 className='heading3'>Lives Impacted</h3>
        <div className=' md:h-[300px] px-5 sections py-4 bg-[#FAF2DE] flex items-center flex-wrap gap-y-5  justify-evenly'>
            {
                Impact.map(impact =>{
                    return(
                        <div className='bg-oranges-100  rounded-full px-2 py-8 h-[170px] w-[170px] border-2 border-600 border-oranges-200 text-center '>
                            
                            <h4 className='heading4'>{impact.number}</h4>
                            <p>{impact.text}</p>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Impacted