import React from 'react'
import Footer from '../components/Footer'
import ceo1 from '../assets/ceo1.svg'
import ceo2 from '../assets/ceo2.svg'
import ceo3 from '../assets/ceo3.svg'
import ceo4 from '../assets/ceo4.svg'
import ceo5 from '../assets/ceo5.svg'
// import ceo6 from '../assets/coe6.svg'

const About = () => {
  return (
    <section>
        <div className=''>
          <div className='sections'>
            <h2 className='heading2'>About Us</h2>
            <p>
              The Rosemary Care Foundation empowers widows and underprivileged children through sustainable programs, economic opportunities, and community development. We provide education, healthcare, and entrepreneurship training to help them achieve self sufficiency. By uplifting these groups, we create lasting impacts that transform communities and future generations, offering hope and support to those in need.
            </p>
            <div className='flex max-sm:flex-col mt-5 gap-5'>
              <button className='button' type='button'>Volunteer</button>
              <button className='button' type='button'>Partner</button>
              <button className='button' type='button'>Donate</button>
            </div>
          </div>

          <div className='sections pt-10'>
            <div className='flex'>
              <div className='grid gap-5'>
                <div>
                  <h3 className='text-[32px] md:text-[40px] font-semibold leading-[40px] md:leading-[60px] text-blacks-200'>Our Vision</h3>
                  <p>
                    A world where every widow and underprivileged child is equipped with the tools to build a sustainable future, breaking the cycle of poverty and transforming their lives and communities for the better
                  </p>
                </div>
                <div>
                  <h3 className='text-[32px] md:text-[40px] font-semibold leading-[40px] md:leading-[60px] text-blacks-200'>Our Mission</h3>
                  <p>
                    To empower widows and underprivileged children by providing sustainable resources, education, and entrepreneurship opportunities. We are committed to creating a supportive environment where individuals can thrive, fostering resilience and long term success.                  </p>
                </div>
              </div>
              <img src="" alt="" />
            </div>
          </div>

          <div className='sections pt-10'>
            <div className='text-center mb-10'>
              <h3 className='heading3'>Meet The Board Of Trustees</h3>
              <p>Our Board of Trustees is a passionate group of professionals dedicated to guiding
                Rosemary Ibeji Care Foundation toward acheiving its mission of empowering widows and underprivileged children.
              </p>
            </div>
            <div className='grid gap-y-10 gap-5  md:grid-cols-3'>
              <div className='text-center grid gap-3'>
                <img src={ceo1} alt="" />
                <h4>Jemimah Titus</h4>
                <p className='text-neutral-500 text-[14px]'>Cofounder, CEO</p>
              </div>
              <div className='text-center grid gap-3'>
                <img src={ceo2} alt="" />
                <h4>Dikson Jude</h4>
                <p className='text-neutral-500 text-[14px]'>Cofounder, CEO</p>
              </div>
              <div className='text-center grid gap-3'>
                <img src={ceo3} alt="" />
                <h4>Shade Fomolake </h4>
                <p className='text-neutral-500 text-[14px]'>Cofounder, CEO</p>
              </div>
              <div className='text-center grid gap-3'>
                <img src={ceo4} alt="" />
                <h4>Sarah Jakes</h4>
                <p className='text-neutral-500 text-[14px]'>Cofounder, CEO</p>
              </div>
              <div className='text-center grid gap-3'>
                <img src={ceo5} alt="" />
                <h4>David Oluwapelu</h4>
                <p className='text-neutral-500 text-[14px]'>Cofounder, CEO</p>
              </div>
              <div className='text-center grid gap-3'>
                <img src={ceo5} alt="" />
                <h4>Akintola Johnson</h4>
                <p className='text-neutral-500 text-[14px]'>Cofounder, CEO</p>
              </div>
            </div>
          </div>

          <div className='p-8 flex max-sm:flex-col gap-5'>
            <p>Would you like to join us to put a smile on someone face today?</p>
            <button type='button' className='button'>Donate</button>
          </div>

        </div>

        <Footer/>
    </section>
  )
}

export default About