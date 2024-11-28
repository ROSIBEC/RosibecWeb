import React, { useState } from 'react'
import { NavLink } from '../constant/data'
import { Menu } from 'lucide-react'
import logo from '../assets/logo.svg'
import { Outlet , Link } from 'react-router-dom'


const Layout = () => {
  const [click, setClick] = useState(false)

  return (
    < div className='max-w-[1440px] mx-auto'>
      <nav className='py-5 px-5 md:px-10 lg:px-[120px]'>
        <ul className='flex justify-between items-center'>
          <Link to='/' className='cursor-pointer'><img src={logo} alt=""  className='w-[70px]'/></Link>
          <div className='hidden md:flex gap-10'>
              {
                  NavLink.map(navlink =>{
                      return(
                          <div>
                              
                              <Link to={navlink.link}><p className=' font-medium cursor-pointer '>{navlink.name}</p></Link>
                          </div>
                      )
                  })
              }

          </div> 
          <div onClick={()=>setClick(!click)} >
            <div className={`${click ? 'w-[50vw] visible':'invisible'}`}>
              <div className='fixed right-0 top-0 grid gap-5 bg-purples-200/80 px-5 z-50 py-20 h-screen text-whites-200 md:flex '>
                  {
                      NavLink.map(navlink =>{
                          return(
                              <div>
                                  
                                  <Link to={navlink.link}><p className=' font-semibold cursor-pointer '>{navlink.name}</p></Link>
                              </div>
                          )
                      })
                  }

                  <Link to='/donate' className='bg-white text-purples-200 py-2 px-4 grid items-center rounded-[16px]'><button type="button">Donate</button></Link>

              </div>
              {/* <Link to='/donate'><button type="button" className='button hidden md:flex'>Donate</button></Link> */}
            </div> 
          </div>
          <Link to='/donate'><button type="button" className='button hidden md:flex'>Donate</button></Link>
          <Menu onClick={()=>setClick(!click)} className='md:hidden'/>
        </ul>
      </nav>

      <Outlet />
  </div>
  )
}

export default Layout