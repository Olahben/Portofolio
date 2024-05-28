/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'

const MediaProjects = () => {
    return (
        <div className="max-w-[1064px] text-center p-2">
            <p className="text-3xl font-medium mb-5">Media-oriented projects</p>
            <div className="flex flex-row flex-wrap max-w-[1064px] p-2 gap-x-10 gap-y-4 justify-center">
                <img alt="Shopping mall" src="/kjopeSenter1.jpeg" className="w-[40%] order-1"></img>
                <img alt="My friend" src="/yevhenii.jpg" className="w-[40%] order-2"></img>
                <img alt="Nature" src="/natur.jpg" style={{ width: 'calc(80% + 2.5rem)' }} className=" order-3"></img>
                <img alt="Move I produced" src="lidenskap.png" style={{ width: 'calc(80% + 2.5rem)' }} className="] order-4"></img>
            </div>
        </div>
    )
}

export default MediaProjects