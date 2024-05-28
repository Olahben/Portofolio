/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from 'react'

const MediaProjects = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="max-w-[1064px] text-center p-2">
            <p className="text-2xl font-normal mb-5">Media-oriented projects</p>
            <div className="flex flex-row flex-wrap max-w-[1064px] p-2 gap-x-20 gap-y-4 justify-center md:gap-x-3 md:gap-y-3">
                <img alt="Shopping mall" src="/kjopeSenter1.jpeg" className="w-[40%] order-1 md:order-1 md:w-[33%]"></img>
                <img alt="My friend" src="/yevhenii.jpg" className="w-[40%] order-2 md:order-3 md:w-[28%]"></img>
                <img alt="Nature" src="/natur.jpg" style={isLargeScreen ? {} : { width: 'calc(80% + 5rem)' }} className="order-3 md:order-2 md:w-[65%]"></img>
                <img alt="Move I produced" src="lidenskap.png" style={isLargeScreen ? {} : { width: 'calc(80% + 5rem)' }} className="order-4 md:order-4 md:w-[70%]"></img>
            </div>
        </div>
    )
}

export default MediaProjects