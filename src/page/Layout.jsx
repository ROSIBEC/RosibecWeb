import React from 'react'
import { NavLink } from '../constant/data'
import { Menu } from 'lucide-react'
import logo from '../assets/logo.svg'
import { Outlet , Link } from 'react-router-dom'


const Layout = () => {
  return (
    < div className='max-w-[1440px] mx-auto'>
      <nav className='py-5 px-5 md:px-10 lg:px-[120px]'>
        <ul className='flex justify-between items-center'>
          <Link to='/' className='cursor-pointer'><img src={logo} alt=""  className='w-[70px]'/></Link>
          <div className='hidden md:flex gap-5'>
              {
                  NavLink.map(navlink =>{
                      return(
                          <div>
                              
                              <Link to={navlink.link}><p className=' font-semibold cursor-pointer '>{navlink.name}</p></Link>
                          </div>
                      )
                  })
              }

          </div> 
          <Link to='/donate'><button type="button" className='button hidden md:flex'>Donate</button></Link>
          <Menu className='md:hidden'/>
        </ul>
      </nav>

      <Outlet />
  </div>
  )
}

export default Layout