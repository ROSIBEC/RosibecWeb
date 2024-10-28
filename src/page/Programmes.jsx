import React from 'react'

// import {Blogs} from '../components/Blogs'
import renovate from '../assets/programRenovating.svg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Programmes = () => {
  return (
    <section className='mt-5'>
        <div>
            <div className='px  w-full h-full  object-contain'>
                <div className='bg-programHeader rounded-[16px] bg-cover bg-no-repeat flex flex-col items-center text-center justify-center px-13  md:px-20 h-[500px]'>
                    <h2 className='bgHeaderText'>Programmes & Initaitives </h2>
                    <p>We empower widows and underprivileged children by addressing thier needs through economic empowerment, healthcare assistance, and education support. Each inititative equips individuals 
                        with the resources and tools needed to foster self sufficiency.
                    </p>
                    <button type="button">Donate</button>
                </div>
            </div>
            <div className='bg-whites-200 mt-10 py-20'>
                <div className='px'>
                    <h3 className='heading3 mb-10'>We are Renovating a Widowers home</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Sed mattis risus habitant arcu quis non tellus vel id. Bibendum pulvinar vitae tristique turpis porta justo hac. Lorem ipsum dolor sit amet consectetur. Sed mattis risus habitant arcu quis non tellus 
                        Lorem ipsum dolor sit amet consectetur. Sed mattis risus habitant arcu quis non tellus vel id. Bibendum pulvinar vitae tristique turpis porta justo hac. Lorem ipsum dolor sit amet consectetur. Sed mattis risus habitant arcu quis non tellus 
                    </p>
                </div>
            </div>
            <div className='px min-h-[400px] py-10 max-h-screen flex max-sm:flex-col gap-10 mt-10'>
                <img src={renovate} alt="" />
                <div className='grid  gap-2'>
                    <h3 className='heading4'>Renovating a Widowers home</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Sed mattis risus habitant arcu quis non tellus vel id. Bibendum pulvinar vitae tristique turpis porta justo hac. Tellus egestas sapien purus
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Sed mattis risus habitant arcu quis non tellus vel id. Bibendum pulvinar vitae tristique turpis porta justo hac. Tellus egestas sapien purus
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Sed mattis risus habitant arcu quis non tellus vel id. Bibendum pulvinar vitae tristique turpis porta justo hac. Tellus egestas sapien purus
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Sed mattis risus habitant arcu quis non tellus vel id. Bibendum pulvinar vitae tristique turpis porta justo hac. Tellus egestas sapien purus
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Sed mattis risus habitant arcu quis non tellus vel id. Bibendum pulvinar vitae tristique turpis porta justo hac. Tellus egestas sapien purus
                    </p>
                    <button type="button" className='button'>Donate</button>
                </div>
                
            </div>
            {/* <Blogs/> */}
            <div className='px mt-10 '>
                <div className='bg-programJoin rounded-[16px] bg-cover bg-no-repeat h-[500px] flex flex-col items-center justify-center px-5 md:px-20'>
                    <h3 className='bgHeaderText'>Join the cause</h3>
                    <p>Make a difference today! Your time and skills can bring hope and transform communities. 
                        Join us in empowering others and creating lasting change!
                    </p>
                </div>
                <div className='w-9/12 gap-10 mx-auto my-10 flex max-sm:flex-col justify-between'>
                    <button type="button" className='button md:w-4/12'>Volunteer</button>
                    <button type="button" className='button md:w-4/12'>Partner</button>
                    <Link to='/donate' className='w-full'><button type="button" className='button md:w-5/12'>Donate</button></Link>
                </div>
            </div>
            <Footer/>
        </div>

    </section>
  )
}

export default Programmes