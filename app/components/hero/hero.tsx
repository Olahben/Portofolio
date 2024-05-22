import React from 'react'
import BgParticles from './particles'
import Me from './Me'
import SocialLinks from './SocialLinks'

const Hero = () => {
    return (
        <div className="w-[100%] mt-[-76px] h-[560px] sm:h-[580px] md:h-[624px] xl:h-[560px] relative z-[0] flex justify-center" id="Home">
            <BgParticles />
            <Me />
        </div>
    )
}

export default Hero