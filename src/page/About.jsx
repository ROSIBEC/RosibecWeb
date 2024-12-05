import React from 'react'
import Footer from '../components/Footer'
import ceo1 from '../assets/board1.svg'
import ceo2 from '../assets/board2.svg'
import ceo3 from '../assets/board3.svg'
import ceo4 from '../assets/board4.svg'
import ceo5 from '../assets/board5.svg'
import partnership from '../assets/prayerCover.svg'
import visionn from '../assets/visionn.svg'
import missionn from '../assets/missionn.svg'
import { Link } from 'react-router-dom'
// import ceo6 from '../assets/coe6.svg'

const About = () => {
  return (
    <section className='sections'>
        <div className=''>
          <div className='relative md:my-10 max-sm:mb-5  rounded-[16px]  bg-contactHeader h-[380px] md:h-[470px] text-center bg-cover bg-center bg-no-repeat'>
            
            <div className='overlay'>
              <div className='md:w-1/2 pt-5 z-50  md:pt-10 text-whites-200 mx-auto grid gap-5 md:gap-10 '>
                <h2 className='heading2'>About Us</h2>
                <p>
                  The Rosemary Care Foundation empowers widows and underprivileged children through sustainable programs, economic opportunities, and community development. We provide education, healthcare, and entrepreneurship training to help them achieve self sufficiency. By uplifting these groups, we create lasting impacts that transform communities and future generations, offering hope and support to those in need.
                </p>
                <div className='flex max-sm:hidden items-center justify-center mt-5 gap-5'>
                  <Link to='/volunteer'><button className='button' type='button'>Volunteer</button></Link>
                  <Link to='/volunteer'><button className='button' type='button'>Partner</button></Link>
                  <Link to='/donate'><button className='button' type='button'>Donate</button></Link>
                </div>
              </div>
            </div>
          </div>

          <div className=' pt-10'>
            <div className='flex flex-col gap-10 md:gap-20 relative'>
                <div className='bg-purples-200 hidden md:flex  absolute right-[160px] text-whites-200 top-[220px] rounded-full px-6 py-8'><span className='text-[20px] font-semibold'>20 Years</span> <br /> in Service</div>
                <div className='grid md:grid-cols-2 gap-5'>
                  <div>
                    <h3 className='text-[32px] md:text-[40px] font-semibold leading-[40px] md:leading-[60px] text-blacks-200'>Our Vision</h3>
                    <p>
                      A world where every widow and underprivileged child is equipped with the tools to build a sustainable future, breaking the cycle of poverty and transforming their lives and communities for the better.
                    </p>
                  </div>
                  <img src={visionn} alt="" className='rounded-[20px]' />
                </div>
                <div className='flex max-sm:flex-col gap-5'>
                  <div>
                    <h3 className='text-[32px] md:text-[40px] font-semibold leading-[40px] md:leading-[60px] text-blacks-200'>Our Mission</h3>
                    <p>
                      To empower widows and underprivileged children by providing sustainable resources, education, and entrepreneurship opportunities. We are committed to creating a supportive environment where individuals can thrive, fostering resilience and long term success. </p>
                  </div>
                  <img src={missionn} alt="" className='rounded-[20px]' />
                </div>
              
            </div>
          </div>

          <div className=' pt-10'>
            <div className='text-center mb-10'>
              <h3 className='heading3'>Meet The Board Of Trustees</h3>
              <p>Our Board of Trustees is a passionate group of professionals dedicated to guiding
                Rosemary Ibeji Care Foundation toward acheiving its mission of empowering widows and underprivileged children.
              </p>
            </div>
            <div className='grid gap-y-10 gap-5  md:grid-cols-3'>
              <div className='text-center grid gap-3'>
                <img src={ceo1} alt="" className='rounded-[20px]' />
                <h4>Rev Mrs Rosemary Ibeji</h4>
                <p className='text-neutral-500 text-[14px]'>Chairman</p>
              </div>
              <div className='text-center grid gap-3'>
                <img src={ceo2} alt="" className='rounded-[20px]' />
                <h4>Mr. Peter Ibeji</h4>
                <p className='text-neutral-500 text-[14px]'>Trustees</p>
              </div>
              <div className='text-center grid gap-3'>
                <img src={ceo3} alt="" className='rounded-[20px]' />
                <h4>Mrs. Peace Ezeka</h4>
                <p className='text-neutral-500 text-[14px]'>Trustees</p>
              </div>
              <div className='text-center grid gap-3'>
                <img src={ceo4} alt="" className='rounded-[20px]' />
                <h4>Chidinma Ibeji</h4>
                <p className='text-neutral-500 text-[14px]'>Treasurer</p>
              </div>
              <div className='text-center grid gap-3'>
                <img src={ceo5} alt="" className='rounded-[20px]' />
                <h4>Mary Ibeji</h4>
                <p className='text-neutral-500 text-[14px]'>Secretary</p>
              </div>
              {/* <div className='text-center grid gap-3'>
                <img src={ceo5} alt="" className='rounded-[20px]' />
                <h4>Akintola Johnson</h4>
                <p className='text-neutral-500 text-[14px]'>Cofounder, CEO</p>
              </div> */}
            </div>
          </div>

          <div className='w-full py-20 grid items-center justify-center mb-5'>
            <h3 className='heading3'>Partnership</h3>
            <img src={partnership} alt="" className='' />
          </div>

          <div className='p-5 flex max-sm:text-center rounded-[20px] bg-purple-400 items-center justify-center max-sm:flex-col gap-5'>
            <p>Would you like to join us to put a smile on someone face today?</p>
            <button type='button' className='button'>Donate</button>
          </div>

        </div>

        <Footer/>
    </section>
  )
}

export default About