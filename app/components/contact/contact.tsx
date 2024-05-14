import React from 'react'
import ContactMe from './contactMe'
import Form from './form'

const Contact = () => {
  return (
    <div className="justify-start flex flex-wrap flex-col sm:max-w-[608] sm:w-[608px]">
        <ContactMe />
        <Form />
    </div>
  )
}

export default Contact