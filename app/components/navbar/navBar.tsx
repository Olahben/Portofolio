import React from 'react'
import NavBarLink from './navBarLink'

const navBar = () => {
  return (
    <div className='navbar-center bg-component-background-color
     flex w-full top-0 justify-between font-nunito font-medium text-md fixed p-[10%] pt-1.5 pb-1.5 sm:mt-5 sm:w-[45%] sm:pt-2.5 sm:pb-2.5 sm:p-[2%] sm:tracking-normal sm:text-md sm:rounded-full'>
      <NavBarLink text="Home" />
      <NavBarLink text="Projects" />
      <NavBarLink text="Skills" />
      <NavBarLink text="Contact" />
     </div>
  )
}

export default navBar