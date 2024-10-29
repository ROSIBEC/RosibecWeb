import React from 'react'
import { FooterLink } from '../constant/data'
import  logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='border-t-2 max-sm:mt-10  px-3 md:px-10 xl:px-[120px] pt-12  border-blacks-50'>
        <div className='flex max-sm:flex-col gap-y-3 border-b pb-4  border-blacks-50 justify-between'>
            {
                FooterLink.map(footerlink=>{
                    return(
                        <div>
                            <Link to={footerlink.link} className='text-blacks-100/70 font-semibold cursor-pointer'><p >{footerlink.name}</p></Link>
                        </div>
                    )
                })
            }
        </div>

        <div className='flex  justify-between items-center mt-8'>
            <Link to='/'><img src={logo} alt=""  className='max-sm:w-[70px]'/></Link>
            <p className='text-blacks-50'>&copy; 2024 Rosemary. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer