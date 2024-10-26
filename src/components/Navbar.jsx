import React from 'react'
import { NavLink } from '../constant/data'
import { Menu } from 'lucide-react'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return ( 
    <nav className='py-5 px-5 md:px-10 lg:px-[120px]'>
        <div className='flex justify-between items-center'>
            <img src={logo} alt=""  className='w-[70px]'/>
            <div className='hidden md:flex gap-5'>
                {
                    NavLink.map(navlink =>{
                        return(
                            <div>
                                <p className='h font-semibold cursor-pointer '>{navlink.name}</p>
                            </div>
                        )
                    })
                }

            </div>
            
            <button type="button" className='button hidden md:flex'>Donate</button>
            <Menu className='md:hidden'/>
        </div>
    </nav>
  )
}

export default Navbar