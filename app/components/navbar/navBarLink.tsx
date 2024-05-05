import React from 'react'
import Link from 'next/link'

type TextLink = {
    text: string;
}

const NavBarLink: React.FC<TextLink> = ({   text    }) => {
  return (
    <Link className="hover:text-black" href={text}>{text}</Link>
  )
}

export default NavBarLink