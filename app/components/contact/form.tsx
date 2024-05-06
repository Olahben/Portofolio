"use client"
import React, {useEffect, useState} from 'react'

const Form = () => {
    return (
    <div className="mt-10">
        <form className='justify-start flex gap-y-2 flex-col'>
            <div>
                <input id="email" className='h-14 shadow rounded-md p-2 w-full' aria-label="email" placeholder="Your email" type="text" />
            </div>
            <div>
                <textarea id="message" className='h-40 shadow rounded-md p-2 w-full resize-y' placeholder="Your message" aria-label="message"></textarea>
            </div>
            <div>
                <button className="rounded-full  bg-btn-color text-white h-14 w-32 text-center
                 font-medium justify-center hover:scale-110">Send <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>
</button>
            </div>
        </form>
    </div>
    )
}

export default Form