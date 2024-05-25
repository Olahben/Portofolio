"use client"
import React from 'react'
import NavBarLink from './navBarLink'
import { useEffect, useState } from 'react'

type NavBarLinkProps = {
  text: string;
  currentSection: string;
}

export default function NavBar() {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id)
        }
      });
    }, { threshold: 0.7 });
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (

    <div className="navbar-center bg-component-background-color
     flex w-full top-0 justify-between font-nunito text-md fixed sm:mt-5
      sm:tracking-normal sm:text-lg sm:rounded-full sm:max-w-[608px]
      sm:font-[200] sm:pl-8 sm:pr-8 z-10 pt-1.5 pb-1.5">
      <NavBarLink text="Home" currentSection={currentSection} />
      <NavBarLink text="Projects" currentSection={currentSection} />
      <NavBarLink text="Skills" currentSection={currentSection} />
      <NavBarLink text="Experience" currentSection={currentSection} />
      <NavBarLink text="Contact" currentSection={currentSection} />
    </div>
  )
}