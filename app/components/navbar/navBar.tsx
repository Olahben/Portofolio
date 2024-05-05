import React from 'react'
import NavBarLink from './navBarLink'

const navBar = () => {
  return (
    <div className='navbar-center bg-component-background-color
     flex w-full top-0 justify-between font-nunito font-medium text-md fixed p-[10%] pt-1.5 pb-1.5'>
      <NavBarLink text="Home" />
      <NavBarLink text="Projects" />
      <NavBarLink text="Skills" />
      <NavBarLink text="Contact" />
     </div>
  )
}

export default navBar