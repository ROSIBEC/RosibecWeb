import React from 'react'
import { Blog } from '../constant/data'

const Blogs = () => {
  return (
    <section>
        <div className='px min-h-[400px] mt-10 grid gap-10 md:grid-cols-3'>
            {
                Blog.map(blog=>{
                    return(
                        <div className='grid gap-5' key={blog.title}>
                            <img src={blog.img} alt="" />
                            <h4 className='heading4'>{blog.title}</h4>
                            <p>{blog.desc}</p>
                            <button className='button' type="button">Read more</button>
                        </div>
                    )
                })
            }
       </div>
    </section>
  )
}

export default Blogs