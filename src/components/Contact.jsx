import { ChevronDown, Facebook, Instagram, LucideInstagram, Twitter } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <section className='md:sections '>
        <div className='bg-purples-100/30 px-5 py-10'>
            <div className='text-center'>
                <p>Contact us</p>
                <h3 className='heading3'>Get in touch</h3>
                <p>We'd love to hear from you. Please fill out this form.</p>
            </div>

            <form action="" className='grid gap-y-3 md:w-[70%] mx-auto pt-5 '>
                <div className='flex gap-8 w-full justify-between'>
                    <div className='grid gap-2 w-full'>
                        <label htmlFor="">First name</label>
                        <input type="text" placeholder='First name' className='input'/>
                    </div>
                    <div className='grid gap-2 w-full'>
                        <label htmlFor="">Last name</label>
                        <input type="text" placeholder='Last name' className='input' />
                    </div>
                </div>

                <div className='grid gap-2'>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='you@company.com' className='input'/>
                </div>
                <div className='grid gap-2'>
                    <label htmlFor="">Phone number</label>
                    <input type="text" placeholder='+2348 000-0000' className='input'/>
                </div>
                <div className='grid gap-2'>
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" className='input'></textarea>
                </div>
                <div className='flex gap-4'>
                    <input type="checkbox" name="" id="" />
                    <p>Sign up for updates, promotion and more.</p>
                </div>
                <button type="submit" className='button'>Send message</button>
            </form>

            
        </div>

        <div className='flex px-5  max-sm:flex-col justify-between pt-10 lg:pt-32'>
                <div className='w-[300px]'>
                    <p className='text-blacks-50'>Address:</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non enim incidunt accusamus provident, quasi architecto molestiae. Maiores, quis quo consectetur minus nihil nisi corporis.</p>
                </div>
                <div className='grid gap-5 my-5'>
                    <div>
                        <p className='text-blacks-50'>Phone number:</p>
                        <p>+234 803 312 5382</p>
                    </div>
                    <div className='md:mt-6'>
                        <p className='text-blacks-50'>email</p>
                        <p>rosibecfoundation@gmail.com</p>
                    </div>
                </div>
                <div>
                    <div className='flex gap-3'>
                        <LucideInstagram/>
                        <Facebook/>
                        <Twitter/>
                        
                    </div>
                    <button type="button" className='button flex gap-3 mt-8'>Open hours <ChevronDown/></button>
                    
                </div>
            </div>
    </section>
  )
}

export default Contact