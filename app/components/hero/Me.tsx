import React from 'react'

const Me = () => {
    return (
        <div className="flex flex-col w-full h-full absolute items-center mt-32 max-w-[550px]">
            <div className="avatar">
                <div className="w-28 rounded-full ring ring-primary ring-offset-base-300">
                    <img src="/IMG_1732.jpg"></img>
                </div>
            </div>
            <p className="text-xl text-white font-semibold mt-5 flex justify-center items-center flex-wrap text-center">Hello, I'm Ola. I'm a student/software developer currently attending Mailand VGS in Norway. I'm currently working with a variety of tools including: Blazor, mutliple Adobe applications, Typescript and Next.JS </p>
        </div>
    )
}

export default Me