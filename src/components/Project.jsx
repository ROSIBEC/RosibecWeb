import React from 'react'
import { Projects } from '../constant/data'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <section className='sections'>
        <h3 className='heading3 pb-12'>Ongoing Projects</h3>
        <div className='grid md:grid-cols-2 gap-8'>
            {
                Projects.map(project =>{
                    return(
                        <div key={project.title}> 
                            <img src={project.img} alt={project.title} />
                            <h4 className='pt-4 heading4'>{project.title}</h4>
                            <p className='my-3'>{project.text}</p>
                            <Link to={project.href}><button type="button" className='button'>Donate</button></Link>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Project