import React from 'react'
import ContactMe from './contactMe'
import Form from './form'

const Contact = () => {
  return (
    <div className="justify-start flex flex-wrap flex-col sm:max-w-[608px] sm:w-[608px] md:max-w-[740px] md:w-[608px] lg:max-w-[908px] lg:w-[608px]">
      <ContactMe />
      <Form />
    </div>
  )
}

export default Contact