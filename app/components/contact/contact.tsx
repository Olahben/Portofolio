import React from 'react'
import ContactMe from './contactMe'
import Form from './form'

const Contact = () => {
  return (
    <div className="mt-20 justify-start flex flex-wrap flex-col max-w-3xl">
        <ContactMe />
        <Form />
    </div>
  )
}

export default Contact