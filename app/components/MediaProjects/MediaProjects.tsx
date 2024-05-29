/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from 'react'

const MediaProjects = () => {
    let [isLargeScreen, setIsLargeScreen] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        try {
            setIsLargeScreen(window.innerWidth > 768);
            setHasLoaded(true);
        } catch (error) {
            setIsLargeScreen(false);
            setHasLoaded(true);
        }

        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!hasLoaded) {
        return <p>Loading...</p>;
    } else {
        return (
            <div className="max-w-[1064px] text-center p-2">
                <p className="text-2xl font-normal mb-5">Media-oriented projects</p>
                <div className="flex flex-row flex-wrap max-w-[1064px] p-2 gap-x-20 gap-y-4 justify-center md:gap-x-3 md:gap-y-3">
                    <div className="flex flex-row flex-wrap max-w-[1064px] p-2 gap-x-10 md:gap-x-2 gap-y-2 justify-center">
                        <div className="relative group w-[35%] md:w-[33%] order-1 md:order-1" data-aos="fade-right" data-aos-once="true">
                            <img src="/kjopeSenter1.jpeg" className="w-full h-full"></img>
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200"></div>
                        </div>
                        <div className="relative group order-3 md:order-2" style={isLargeScreen ? { width: "62%" } : { width: "calc(70% + 2.5rem)" }} data-aos={`${isLargeScreen ? "fade-left" : "fade-up"}`} data-aos-once="true">
                            <img src="/natur.jpg" className="w-full h-full"></img>
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200"></div>
                        </div>
                        <div className="relative group w-[35%] md:w-[31%] order-2 md:order-3" data-aos={`${isLargeScreen ? "fade-right" : "fade-left"}`} data-aos-once="true" data-aos-duration="2000">
                            <img src="/yevhenii.jpg" className="w-full h-full"></img>
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200"></div>
                        </div>
                        <div className={`relative group order-4 md:order-4`} style={isLargeScreen ? { width: "64%" } : { width: "calc(70% + 2.5rem)" }} data-aos={`${isLargeScreen ? "fade-left" : "fade-up"}`} data-aos-once="true" data-aos-duration="2000">
                            <img src="lidenskap.png" className="w-full h-full"></img>
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200 text-white text-base p-2">
                                <p>A short movie covering my friend Håkons interest about music. I used a lot of different cameras and equipment to get the right content. I used Adobe Premiere Pro to edit the material and get my desired result.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full bg-black opacity-85 hidden group-hover:inline"></div>
                </div >
            </div >
        )
    };
}

export default MediaProjects