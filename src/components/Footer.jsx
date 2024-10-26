import React from 'react'
import { FooterLink } from '../constant/data'
import  logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className='border-t-2 max-sm:mt-10  px-5 md:px-10 xl:px-[120px] pt-12  border-blacks-50'>
        <div className='flex max-sm:flex-col border-b pb-4  border-blacks-50 justify-between'>
            {
                FooterLink.map(footerlink=>{
                    return(
                        <div>
                            <p className='text-blacks-100/70 font-semibold'>{footerlink.name}</p>
                        </div>
                    )
                })
            }
        </div>

        <div className='flex  justify-between items-center mt-8'>
            <img src={logo} alt=""  className='max-sm:w-[70px]'/>
            <p className='text-blacks-50'>&copy; 2024 Rosemary. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer