import React from 'react'
import Lagerhotell from './Lagerhotell'
import CryptoBot from './CryptoBot'
import KnightsTravails from './KnightsTravails'
import Portfolio from './Portfolio'

const Projects = () => {
    return (
        <div className="max-w-[56rem] flex flex-col content-center justify-center text-center m-5 mt-0 flex flex-col gap-y-10" data-aos="fade-up" data-aos-duration="2000">
            <p className="text-3xl font-medium mb-4">My Projects</p>
            <Lagerhotell />
            <CryptoBot />
            <KnightsTravails />
            <Portfolio />
        </div>
    )
}

export default Projects