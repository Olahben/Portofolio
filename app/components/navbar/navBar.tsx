import React from 'react'
import NavBarLink from './navBarLink'

const navBar = () => {
  return (
    <div className="navbar-center bg-component-background-color
     flex w-full top-0 justify-between font-nunito text-md fixed p-[10%] pt-1.5 pb-1.5 sm:mt-5
      sm:pt-2.5 sm:pb-2.5 sm:p-[2%] sm:tracking-normal sm:text-lg sm:rounded-full sm:max-w-[608px]
      sm:font-[200] sm:pl-8 sm:pr-8 z-10">
      <NavBarLink text="Home" />
      <NavBarLink text="Projects" />
      <NavBarLink text="Skills" />
      <NavBarLink text="Experience" />
      <NavBarLink text="Contact" />
    </div>
  )
}

export default navBar