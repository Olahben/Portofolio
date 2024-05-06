"use client"
import React, {useState} from 'react'

    const Form = () => {
        const [formData, setFormData] = useState({
            email: '',
            message: ''
        })

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            console.log(formData);
        }

        return (
            <div className="mt-10">
                <form onSubmit={handleSubmit} className='justify-start flex gap-y-2 flex-col'>
                    <div>
                        <input
                            id="email"
                            className='h-14 shadow rounded-md p-2 w-full'
                            aria-label="email"
                            placeholder="Your email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            id="message"
                            className='h-40 shadow rounded-md p-2 w-full resize-y'
                            placeholder="Your message"
                            aria-label="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                        ></textarea>
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
        );
    };

export default Form