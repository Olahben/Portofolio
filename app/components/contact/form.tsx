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
                <button className="rounded-full  bg-btn-color text-white h-14 w-32 text-center font-semibold">Send</button>
            </div>
        </form>
    </div>
    )
}

export default Form