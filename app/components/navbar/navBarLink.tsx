"use client";
import React from 'react'
import Link from 'next/link'

type props = {
  text: string;
  currentSection: string;
}

const NavBarLink: React.FC<props> = ({ text, currentSection }) => {
  return (
    <span className={`rounded-full group p-2 px-3 ${currentSection === text ? "bg-slate-100 transition ease-in-out duration-300" : ""}`}>
      <Link className={currentSection === text ? "text-black text-[16px]" : "hover:text-black text-[rgb(107,114,128)] text-[16px]"} href={`#${text}`
      }> {text}</Link >
    </span >
  )
}

export default NavBarLink;