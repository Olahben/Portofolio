"use client";
import React from 'react'
import Link from 'next/link'

type TextLink = {
  text: string;
}

const NavBarLink: React.FC<TextLink> = ({ text }) => {
  return (
    <Link className="hover:text-black text-[rgb(107,114,128)] text-[16px]" href={`#${text}`}>{text}</Link>
  )
}

export default NavBarLink