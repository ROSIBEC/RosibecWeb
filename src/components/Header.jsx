import React from 'react'
import header from '../assets/headerrose.svg'

const Header = () => {
  return (
    <header className='px-5 lg:px-[120px] '>
      <img src={header} alt=""  className='w-[1200px]'/>
    </header>
  )
}

export default Header