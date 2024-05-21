import React from 'react'
import Lagerhotell from './Lagerhotell'
import CryptoBot from './CryptoBot'

const Projects = () => {
    return (
        <div className="max-w-[56rem] flex flex-col content-center justify-center text-center m-5 flex flex-col gap-y-10">
            <p className="text-3xl font-medium mb-4">My Projects</p>
            <Lagerhotell />
            <CryptoBot />
        </div>
    )
}

export default Projects