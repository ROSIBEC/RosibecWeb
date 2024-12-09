import { ChevronDown, Facebook, Instagram, LucideInstagram, Twitter } from 'lucide-react'
import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';

//  const test = import.meta.env.VITE_API_URL
const service  = import.meta.env.VITE_APP_SERVICE_ID
const template = import.meta.env.VITE_APP_TEMPLATE_ID
const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY

const Contact = () => {
    const {register, handleSubmit,reset, formState: {errors} } = useForm()
    const [loading, setLoading] =useState(false)
    const [status, setStatus] = useState(null)

    const onSubmit = async (data) =>{
        setLoading(true)
        emailjs.send(service, template , data, publicKey)
        
        .then(()=>{
            setStatus('success')
            reset()
        }).catch (()=>setStatus("error"))
        setLoading(false)
    }

    

    useEffect (()=>{
        if (status==='success'){
            alert('Message sent')
        } else if (status==='error'){
            alert ('Failed to send message')
        }
        
    },[status])

    

    
    // console.log( service,template,publicKey)
    // useEffect(()=>{
    //     const onForm = (data)=>{
    //         console.log(data)
    //     }
    //     return onForm
    // }, [])
    
  return (
    <section className='md:sections '>
        <div className='bg-purples-100/30 px-5 py-10'>
            <div className='text-center'>
                <p>Contact us</p>
                <h3 className='heading3 mb-4 my-2'>Get in touch</h3>
                <p>We'd love to hear from you. Please fill out this form.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} action="" className='grid gap-y-3 md:w-[70%] mx-auto pt-10 '>
                <div className='flex max-sm:flex-col gap-3 md:gap-8 w-full justify-between'>
                    <div className='grid gap-2 w-full'>
                        <label htmlFor="">First name</label>
                        <input {...register('firstname',{required: true})} type="text" placeholder='First name' className='input'/>
                        {errors.firstname && <span className='text-red-500'>Input firstname field</span>}
                    </div>
                    <div className='grid gap-2 w-full'>
                        <label htmlFor="">Last name</label>
                        <input {...register('lastname', {required:true})} type="text" placeholder='Last name' className='input' />
                        {errors.lastname && <span className='text-red-500'>Input lastname field</span>}
                    </div>
                </div>

                <div className='grid gap-2'>
                    <label htmlFor="">Email</label>
                    <input {...register('email', {required:true})} type="email" placeholder='you@company.com' className='input'/>
                    {errors.email && <span className='text-red-500'>Input email field</span>}
                </div>
                <div className='grid gap-2'>
                    <label htmlFor="">Phone number</label>
                    <input {...register('phoneNumber', {required:true})} type="text" placeholder='+2348 000-0000' className='input'/>
                    {errors.phoneNumber && <span className='text-red-500'>Input phone Number</span>}
                </div>
                <div className='grid gap-2'>
                    <label htmlFor="">Message</label>
                    <input {...register('message', {required:true})} type="text" placeholder='Please type in your message' className='input'/>
                    {errors.message && <span className='text-red-500'>Input email field</span>}
                </div>
                {/* <div className='grid gap-2'>
                    <label htmlFor="">Message</label>
                    <input type="text"  {...register('message',{required:true})} name="" id="" className='input'/>
                    
                    {errors.message && <span className='text-red-500'>Input message field</span>}
                </div>
                <div className='flex gap-4'>
                    <input type="checkbox" name="" id="" />
                    <p>Sign up for updates, promotion and more.</p>
                </div> */}
                <button type="submit" className='button' disabled={loading}>{loading? 'Submitting...': 'Send message'}</button>
            </form>

            
        </div>

        <div className='flex px-5 lg:pb-20  max-sm:flex-col items-start flex-wrap justify-between pt-10 lg:pt-32'>
                <div>
                    <p className='text-blacks-50'>Phone number:</p>
                    <p>+234 803 312 5382</p>
                </div>
                <div className=''>
                    <p className='text-blacks-50'>email</p>
                    <a href="mailto:rosibecfoundation@gmail.com" className='hover:underline '>rosibecfoundation@gmail.com</a>
                </div>
                <div>
                    <div className='flex gap-3'>
                        <a href="https://www.instagram.com/rosibecfoundation"><LucideInstagram/></a>
                        <a href="https://www.facebook.com/RosibecFoundation"><Facebook/></a>
                        <a href="https://x.com/RosibecF"><Twitter/></a>
                        
                    </div>
                    <button type="button" className='button flex gap-3 mt-8'>Open hours <ChevronDown/></button>
                    
                </div>
            </div>
    </section>
  )
}

export default Contact