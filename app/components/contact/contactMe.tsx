import React from 'react'
import Link from 'next/link'

const ContactMe = () => {
  return (
    <>
      <p className='text-3xl font-medium block text-center'>Contact Me</p>
      <p className='text-center'>Please contact me directly at <Link href="mailto:olahben@icloud.com" className="underline">olahben@icloud.com</Link> or</p>
      <p className='text-center'> through the form below.</p>
    </>
  )
}

export default ContactMe