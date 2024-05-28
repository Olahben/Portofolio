"use client"
import React, { useState, useEffect } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    })

    const [toastMessage, setToastMessage] = useState("");
    const [isToastVisible, setIsToastVisible] = useState(false);
    const [emailPending, setEmailPending] = useState(false);
    const [sendEmailError, setSendEmailError] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmailPending(true);
        fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                setToastMessage("E-Mail sucessfully sent!");
                setIsToastVisible(true);
                setEmailPending(false);
                formData.email = "";
                formData.message = "";
                setSendEmailError(false);
            })
            .catch((error) => {
                setToastMessage("An error occurred while trying to send the E-Mail!");
                setSendEmailError(true);
                console.error('Error:', error);
            })
    }

    useEffect(() => {
        if (toastMessage) {
            const timer = setTimeout(() => {
                setToastMessage('');
                setIsToastVisible(false);
            }, 4500);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [toastMessage]);

    return (
        <div className="mt-10">
            <div className={`toast alert alert-success toast-bottom toast-end bg-component-background-color rounded-none ${isToastVisible ? "opacity-100 transition ease-in duration-300" : "opacity-0 transition ease-out duration-300"} ${sendEmailError ? "text-red-800" : ""}`}>{toastMessage}</div>
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
                                     font-medium justify-center hover:scale-110 hover:bg-zinc-950 transition ease-in-out group">Send
                        <svg className="ml-1 w-[12px] h-4 inline transition transform
                             ease-in-out duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" /></svg>
                    </button>
                    {emailPending ? <span className="loading loading-dots loading-lg ml-2 align-bottom"></span> : <span></span>}
                </div>
            </form>
        </div>
    );
};

export default Form