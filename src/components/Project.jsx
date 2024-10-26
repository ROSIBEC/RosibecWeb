import React from 'react'
import { Projects } from '../constant/data'

const Project = () => {
  return (
    <section className='sections'>
        <h3 className='heading3 pb-12'>Ongoing Projects</h3>
        <div className='grid md:grid-cols-2 gap-8'>
            {
                Projects.map(project =>{
                    return(
                        <div>
                            <img src={project.img} alt={project.title} />
                            <h4 className='pt-4 heading4'>{project.title}</h4>
                            <p className='my-3'>{project.text}</p>
                            <button type="button" className='button'>Read more</button>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Project